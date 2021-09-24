import { Injectable } from '@nestjs/common';
import { PaginationCursor } from '@readable/common/pagination/paginationCursor';
import { GetPaginationUserBookmarksInput } from '@readable/pagination/paginationUserBookmarks/applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.input';
import { PaginationWrongCursorExceptoin } from '@readable/pagination/paginationUserBookmarks/domain/errors/paginationUserBookmarks.errors';
import { PaginationUserBookmarksFilter } from '@readable/pagination/paginationUserBookmarks/domain/models/paginationUserBookmarks.filter';
import { PaginationQueryCriteriaType } from '@readable/pagination/paginationUserBookmarks/domain/models/paginationUserBookmarks.model';
import { User } from '@readable/users/domain/models/user.model';
import { EntityRepository, Repository } from 'typeorm';
import { UserBookmark } from '../entities/user-bookmark.entity';

@Injectable()
@EntityRepository(UserBookmark)
export class UserBookmarkRepository extends Repository<UserBookmark> {
  async paginationCallbackQuery(
    query: GetPaginationUserBookmarksInput,
    filter: PaginationUserBookmarksFilter,
    criteria: PaginationQueryCriteriaType,
    requestUser: User
  ) {
    const { first, after, order, orderBy } = query;
    const { normalizedTag, interestId } = filter;

    const queryBuilder = this.createQueryBuilder('userBookmark')
      .leftJoinAndSelect('userBookmark.urlInfo', 'urlInfo')
      .where('userBookmark.createdAt < :createdAt', { createdAt: criteria['createdAt'] });

    if (normalizedTag) {
      queryBuilder.leftJoinAndSelect('userBookmark.tags', 'tag', 'tag.normalizedTag = :normalizedTag', {
        normalizedTag,
      });
    } else {
      queryBuilder.leftJoinAndSelect('userBookmark.tags', 'tags');
    }

    if (interestId) {
      queryBuilder.leftJoinAndSelect('userBookmark.interest', 'interest', 'interest.id = :interestId', {
        interestId,
      });
      queryBuilder.andWhere('userBookmark.userId = :userId', { userId: requestUser.id });
    } else {
      queryBuilder.leftJoinAndSelect('userBookmark.interest', 'interest');
    }

    queryBuilder.limit(first + 1).orderBy('userBookmark.createdAt', 'DESC');

    return queryBuilder.getMany();
  }

  async getPaginationUserBookmarks(
    query: GetPaginationUserBookmarksInput,
    filter: PaginationUserBookmarksFilter,
    requestUser: User
  ) {
    const { first, after, order, orderBy } = query;
    const { normalizedTag, interestId } = filter;

    const criteria = {
      createdAt: new Date(),
    };

    if (after) {
      const { createdAt: afterCreatedAt, order: orderInCursor, orderBy: orderByInCursor } = after;

      // MEMO(Teddy): 요청한 orderBy/order와 커서 안의 정보가 서로 다른 경우 에러를 발생시킨다.
      if (!(order === orderInCursor && orderBy === orderByInCursor)) {
        throw new PaginationWrongCursorExceptoin(after, orderBy, order);
      }

      criteria['createdAt'] = afterCreatedAt;
    }

    const queryBuilder = this.createQueryBuilder('userBookmark')
      .leftJoinAndSelect('userBookmark.urlInfo', 'urlInfo')
      .where('userBookmark.createdAt < :createdAt', { createdAt: criteria['createdAt'] });

    if (normalizedTag) {
      queryBuilder.leftJoinAndSelect('userBookmark.tags', 'tag', 'tag.normalizedTag = :normalizedTag', {
        normalizedTag,
      });
    } else {
      queryBuilder.leftJoinAndSelect('userBookmark.tags', 'tags');
    }

    if (interestId) {
      queryBuilder.leftJoinAndSelect('userBookmark.interest', 'interest', 'interest.id = :interestId', {
        interestId,
      });
      queryBuilder.andWhere('userBookmark.userId = :userId', { userId: requestUser.id });
    } else {
      queryBuilder.leftJoinAndSelect('userBookmark.interest', 'interest');
    }

    queryBuilder.limit(first + 1).orderBy('userBookmark.createdAt', 'DESC');

    let userBookmarks = await queryBuilder.getMany();

    if (!userBookmarks || !userBookmarks.length) return null;

    const hasNextPage = userBookmarks.length > first - 1;

    if (hasNextPage) {
      userBookmarks = userBookmarks.slice(0, userBookmarks.length - 1);
    }

    const edges = userBookmarks.map(bookmark => ({
      cursor: new PaginationCursor(orderBy, order, bookmark.createdAt),
      node: bookmark,
    }));

    return {
      pageInfo: {
        hasNextPage,
        endCursor: edges[edges.length - 1].cursor,
      },
      edges,
    };
  }
}

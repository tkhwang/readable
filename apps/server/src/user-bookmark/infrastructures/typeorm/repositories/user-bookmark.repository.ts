import { Injectable } from '@nestjs/common';
import { PaginationCursor } from '@readable/common/pagination/paginationCursor';
import { PaginationWrongCursorExceptoin } from '@readable/pagination/paginationBookmarks/domain/errors/paginationBookmarks.errors';
import { GetPaginationUserBookmarksInput } from '@readable/pagination/paginationUserBookmarks/applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.input';
import { PaginationUserBookmarksFilter } from '@readable/pagination/paginationUserBookmarks/domain/models/paginationUserBookmarks.filter';
import { EntityRepository, Repository } from 'typeorm';
import { UserBookmark } from '../entities/user-bookmark.entity';

@Injectable()
@EntityRepository(UserBookmark)
export class UserBookmarkRepository extends Repository<UserBookmark> {
  async getPaginationUserBookmarks(query: GetPaginationUserBookmarksInput, filter: PaginationUserBookmarksFilter) {
    const { first, after, order, orderBy } = query;
    const { tagId } = filter;

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
      .innerJoinAndSelect('userBookmark.urlInfo', 'urlInfo')
      .innerJoinAndSelect('userBookmark.interest', 'interest');

    if (tagId) {
      queryBuilder.innerJoinAndSelect('userBookmark.tags', 'tag', 'tag.id IN (:tagId)', { tagId: [tagId] });
    } else {
      queryBuilder.innerJoinAndSelect('userBookmark.tags', 'tags');
    }

    queryBuilder
      .where('userBookmark.createdAt < :createdAt', { createdAt: criteria['createdAt'] })
      .limit(first + 1)
      .orderBy('userBookmark.createdAt', 'DESC');

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

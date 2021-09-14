import { Injectable } from '@nestjs/common';
import { PaginationCursor } from '@readable/common/pagination/paginationCursor';
import { PaginationWrongCursorExceptoin } from '@readable/pagination/paginationBookmarks/domain/errors/paginationBookmarks.errors';
import { GetPaginationUserBookmarksInput } from '@readable/pagination/paginationUserBookmarks/applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.input';
import { User } from '@readable/users/domain/models/user.model';
import { EntityRepository, Repository } from 'typeorm';
import { UserBookmark } from '../entities/user-bookmark.entity';

@Injectable()
@EntityRepository(UserBookmark)
export class UserBookmarkRepository extends Repository<UserBookmark> {
  async getPaginationUserBookmarks(query: GetPaginationUserBookmarksInput, requestUser: User) {
    const { first, after, order, orderBy } = query;

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

    let userBookmarks = await this.createQueryBuilder('userBookmark')
      .leftJoinAndSelect('userBookmark.urlInfo', 'urlInfo')
      .leftJoinAndSelect('userBookmark.interest', 'interest')
      .leftJoinAndSelect('userBookmark.tags', 'tags')
      .where('userBookmark.createdAt < :createdAt', { createdAt: criteria['createdAt'] })
      .limit(first + 1)
      .orderBy('userBookmark.createdAt', 'DESC')
      .getMany();

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

import { Injectable } from '@nestjs/common';
import { PaginationCursor } from '@readable/common/pagination/paginationCursor';
import { GetPaginationBookmarksInput } from '@readable/pagination/paginationBookmarks/applications/usecases/get-pagination-bookmarks/get-pagination-bookmarks.input';
import { PaginationWrongCursorExceptoin } from '@readable/pagination/paginationBookmarks/domain/errors/paginationBookmarks.errors';
import { PaginationBookmarkBRFOs } from '@readable/pagination/paginationBookmarks/domain/models/paginationBookmarks.type';
import { User } from '@readable/users/domain/models/user.model';
import { EntityRepository, LessThan, Repository } from 'typeorm';
import { Bookmark } from '../entities/bookmark.entity';

@Injectable()
@EntityRepository(Bookmark)
export class BookmarksRepository extends Repository<Bookmark> {
  async getPaginationBookmarks(
    query: GetPaginationBookmarksInput,
    requestUser: User
  ): Promise<PaginationBookmarkBRFOs | null> {
    const { first, after, order, orderBy } = query;

    const criteria = {};

    if (after) {
      const { id: afterId, order: orderInCursor, orderBy: orderByInCursor } = after;

      // MEMO(Teddy): 요청한 orderBy/order와 커서 안의 정보가 서로 다른 경우 에러를 발생시킨다.
      if (!(order === orderInCursor && orderBy === orderByInCursor)) {
        throw new PaginationWrongCursorExceptoin(after, orderBy, order);
      }

      criteria['id'] = LessThan(afterId);
    }

    let bookmarks = await this.createQueryBuilder('bookmark')
      .where(criteria)
      .limit(first + 1)
      .orderBy('createdAt', 'DESC')
      .getMany();

    if (!bookmarks || !bookmarks.length) return null;

    const hasNextPage = bookmarks.length > first - 1;

    if (hasNextPage) {
      bookmarks = bookmarks.slice(0, bookmarks.length - 1);
    }

    const edges = bookmarks.map(bookmark => ({
      cursor: new PaginationCursor(orderBy, order, bookmark.id),
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

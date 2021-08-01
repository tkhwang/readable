import { Injectable } from '@nestjs/common';
import { PaginationCursor } from '@readable/common/pagination/paginationCursor';
import { GetPaginationBookmarksInput } from '@readable/pagination/paginationBookmarks/applications/usecases/get-pagination-bookmarks/get-pagination-bookmarks.input';
import {
  PaginationBookmarkBRFOs,
  PaginationBookmarks,
} from '@readable/pagination/paginationBookmarks/domain/paginationBookmarks.type';
import { User } from '@readable/users/domain/user.model';
import { EntityRepository, Repository } from 'typeorm';
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

    let bookmarks = await this.createQueryBuilder('bookmark')
      .where(criteria)
      .limit(first + 1)
      .orderBy(orderBy, order)
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

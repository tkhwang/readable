import { Injectable } from '@nestjs/common';
import { Root } from '@nestjs/graphql';
import { BookmarkBRFO } from '@readable/bookmarks/domain/models/bookmark.model';

@Injectable()
export class PaginationBookmarksService {
  /*
   * Field Resolver
   */
  async getFieldAuthor(
    @Root() bookmark: BookmarkBRFO
  ) {
    const { } = bookmark.
  }
}

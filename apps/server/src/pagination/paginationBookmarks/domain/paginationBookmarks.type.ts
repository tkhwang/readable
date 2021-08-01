import { Field, ObjectType } from '@nestjs/graphql';
import { Bookmark } from '@readable/bookmarks/domain/models/bookmark.model';
import { PaginationPageInfo } from '@readable/common/pagination/pagination.type';
import { PaginationCursor } from '@readable/common/pagination/paginationCursor';
import { PaginationCursorScalar } from '@readable/common/pagination/paginationCursorScalar';

@ObjectType()
export class PaginationBookmarkEdge {
  @Field(type => PaginationCursorScalar)
  cursor: PaginationCursor;

  @Field(type => Bookmark)
  node: Bookmark;
}

@ObjectType()
export class PaginationBookmarksConnection {
  @Field(type => PaginationPageInfo)
  pageInfo: PaginationPageInfo;

  @Field(type => [PaginationBookmarkEdge])
  edges: PaginationBookmarkEdge[];
}

@ObjectType()
export class PaginationBookmarks extends PaginationBookmarksConnection {}

import { Field, ObjectType } from '@nestjs/graphql';
import { PaginationPageInfo } from '@readable/common/pagination/pagination.type';
import { PaginationCursor } from '@readable/common/pagination/paginationCursor';
import { PaginationCursorScalar } from '@readable/common/pagination/paginationCursorScalar';
import { UserBookmark, UserBookmarkBRFO } from '@readable/user-bookmark/domain/model/user-bookmark.model';

@ObjectType()
export class PaginationUserBookmarkEdge {
  @Field(type => PaginationCursorScalar)
  cursor: PaginationCursor;

  @Field(type => UserBookmark)
  node: UserBookmark;
}

@ObjectType()
export class PaginationUserBookmarksConnection {
  @Field(type => PaginationPageInfo)
  pageInfo: PaginationPageInfo;

  @Field(type => [PaginationUserBookmarkEdge])
  edges: PaginationUserBookmarkEdge[];
}

@ObjectType()
export class PaginationUserBookmarks extends PaginationUserBookmarksConnection {}

/*
 *  BRFO
 */
@ObjectType()
export class PaginationUserBookmarkBRFOEdge {
  @Field(type => PaginationCursorScalar)
  cursor: PaginationCursor;

  @Field(type => UserBookmarkBRFO)
  node: UserBookmarkBRFO;
}

@ObjectType()
export class PaginationUserBookmarkBRFOsConnection {
  @Field(type => PaginationPageInfo)
  pageInfo: PaginationPageInfo;

  @Field(type => [PaginationUserBookmarkBRFOEdge])
  edges: PaginationUserBookmarkBRFOEdge[];
}

@ObjectType()
export class PaginationUserBookmarkBRFOs extends PaginationUserBookmarkBRFOsConnection {}

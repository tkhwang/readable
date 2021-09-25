import { Field, ObjectType } from '@nestjs/graphql';
import { PaginationPageInfo } from '@readable/common/pagination/pagination.type';
import { PaginationCursor } from '@readable/common/pagination/paginationCursor';
import { PaginationCursorScalar } from '@readable/common/pagination/paginationCursorScalar';
import { Tag, TagBRFO } from '@readable/tags/domain/models/tag.model';

@ObjectType()
export class PaginationTagsEdge {
  @Field(type => PaginationCursorScalar)
  cursor: PaginationCursor;

  @Field(type => Tag)
  node: TagBRFO;
}

@ObjectType()
export class PaginationTagsConnection {
  @Field(type => PaginationPageInfo)
  pageInfo: PaginationPageInfo;

  @Field(type => [PaginationTagsEdge])
  edges: PaginationTagsEdge[];
}

@ObjectType()
export class PaginationTags extends PaginationTagsConnection {}

/*
 *  BRFO
 */
@ObjectType()
export class PaginationTagBRFOEdge {
  @Field(type => PaginationCursorScalar)
  cursor: PaginationCursor;

  @Field(type => Tag)
  node: TagBRFO;
}

@ObjectType()
export class PaginationTagBRFOsConnection {
  @Field(type => PaginationPageInfo)
  pageInfo: PaginationPageInfo;

  @Field(type => [PaginationTagBRFOEdge])
  edges: PaginationTagBRFOEdge[];
}

@ObjectType()
export class PaginationTagBRFOs extends PaginationTagBRFOsConnection {}

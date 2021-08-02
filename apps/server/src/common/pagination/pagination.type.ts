import { Field, ObjectType } from '@nestjs/graphql';
import { PaginationCursor } from './paginationCursor';
import { PaginationCursorScalar } from './paginationCursorScalar';

@ObjectType()
export class PaginationPageInfo {
  @Field()
  hasNextPage: boolean;

  @Field(type => PaginationCursorScalar, { nullable: true })
  endCursor?: PaginationCursor;
}

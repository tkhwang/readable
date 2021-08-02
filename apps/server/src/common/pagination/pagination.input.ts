import { Field, InputType, Int } from '@nestjs/graphql';
import { PaginationCursor } from './paginationCursor';
import { PaginationCursorScalar } from './paginationCursorScalar';

export const PAGINATION_DEFAULT_FIRST = 10;

@InputType()
export class PaginationCommonInput {
  @Field(type => Int, { defaultValue: PAGINATION_DEFAULT_FIRST })
  first: number;

  @Field(type => PaginationCursorScalar, { nullable: true })
  after: PaginationCursor;

  // @Field(type => Int, { nullable: true })
  // last?: number;

  // @Field(type => String, { nullable: true })
  // before?: string;
}

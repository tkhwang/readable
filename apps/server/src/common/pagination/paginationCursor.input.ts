import { Field, InputType } from '@nestjs/graphql';
import { PaginationOrder, PaginationOrderBy } from './paginationCursor';

@InputType()
export class PaginationCursorInput {
  @Field(type => PaginationOrderBy)
  orderBy: PaginationOrderBy;

  @Field(type => PaginationOrderBy)
  order: PaginationOrder;

  @Field(type => Date)
  createdAt: Date;

  constructor(orderBy: PaginationOrderBy, order: PaginationOrder, createdAt: Date) {
    this.orderBy = orderBy;
    this.order = order;
    this.createdAt = createdAt;
  }
}

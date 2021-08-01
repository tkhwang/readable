import { registerEnumType } from '@nestjs/graphql';
import { PaginationFromCursorFailException } from '../error';

export enum PaginationOrderBy {
  LATEST = 'id',
  LIKE_COUNT = 'likeCount',
}

registerEnumType(PaginationOrderBy, {
  name: 'PaginationOrderBy',
  description: 'Pagination OrderBy',
});

export enum PaginationOrder {
  DESC = 'DESC',
  ASC = 'ASC',
}

registerEnumType(PaginationOrder, {
  name: 'PaginationOrder',
  description: 'Pagination Order (ASC or DESC)',
});

export class PaginationCursor {
  orderBy: PaginationOrderBy;

  order: PaginationOrder;

  id: string;

  constructor(orderBy: PaginationOrderBy, order: PaginationOrder, id: string) {
    this.orderBy = orderBy;
    this.order = order;
    this.id = id;
  }
}

export const toCursor = (value: PaginationCursor): string => Buffer.from(JSON.stringify(value)).toString('base64');

export const fromCursor = (cursor: string): PaginationCursor => {
  let parsed;

  try {
    parsed = JSON.parse(Buffer.from(cursor, 'base64').toString());
  } catch (error) {
    throw new PaginationFromCursorFailException(cursor, error?.message);
  }

  return {
    orderBy: parsed.orderBy,
    order: parsed.order,
    id: parsed.id,
  };
};

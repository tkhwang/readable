import { ObjectType, registerEnumType } from '@nestjs/graphql';
import { PaginationFromCursorFailException } from '../error';
import * as moment from 'moment';

export enum PaginationOrderBy {
  LATEST = 'createdAt',
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

@ObjectType()
export class PaginationCursor {
  orderBy: PaginationOrderBy;

  order: PaginationOrder;

  createdAt: Date;

  constructor(orderBy: PaginationOrderBy, order: PaginationOrder, createdAt: Date) {
    this.orderBy = orderBy;
    this.order = order;
    this.createdAt = moment.utc(createdAt).toDate();
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
    createdAt: moment.utc(parsed.createdAt).toDate(),
  };
};

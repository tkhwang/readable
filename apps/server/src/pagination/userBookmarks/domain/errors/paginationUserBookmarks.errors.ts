import { HttpException, HttpStatus } from '@nestjs/common';
import { PaginationCursor, PaginationOrder, PaginationOrderBy } from '@readable/common/pagination/paginationCursor';

export class PaginationWrongCursorExceptoin extends HttpException {
  constructor(cursor: PaginationCursor, orderBy: PaginationOrderBy, order: PaginationOrder) {
    const { orderBy: orderByInCursor, order: orderInCursor } = cursor;

    const isOrderByMatched = orderBy === orderByInCursor;
    const isOrderMatched = order === orderInCursor;

    let errorMessage = '';

    if (!isOrderByMatched) {
      errorMessage += `orderBy (in cursor: ${orderByInCursor}, request: ${orderBy})`;
    }
    if (!isOrderMatched) {
      errorMessage += `order (in cursor: ${orderInCursor}, request: ${order})`;
    }

    super(errorMessage, HttpStatus.BAD_REQUEST);
  }
}

import { HttpException, HttpStatus } from '@nestjs/common';

export class PaginationFromCursorFailException extends HttpException {
  constructor(serializedCursor: string, message?: string) {
    super(
      `Pagination failed to decode serialized cursor (${serializedCursor})(${message})`,
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}

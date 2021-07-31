import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedDeleteBookmarkWithAuthException extends HttpException {
  constructor(userId: string, bookmarkId: string) {
    super(
      `[-] DeleteBookmarkWithAuthUsecse : User(${userId} doesn't have the bookmark(${bookmarkId}))`,
      HttpStatus.UNAUTHORIZED
    );
  }
}

export class DeleteBookmarkWithAuthFailException extends HttpException {
  constructor(userId: string, bookmarkId: string, errorMessage: string) {
    super(
      `[-] DeleteBookmarkWithAuthUsecse : User(${userId} failed to delete the bookmark(${bookmarkId}) due to eror (${errorMessage}))`,
      HttpStatus.UNAUTHORIZED
    );
  }
}

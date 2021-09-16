import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedDeleteUserBookmarkWithAuthException extends HttpException {
  constructor(userId: string, userBookmarkId: string) {
    super(
      `[-] DeleteBookmarkWithAuthUsecse : User(${userId} doesn't have the userBookmark(${userBookmarkId}))`,
      HttpStatus.UNAUTHORIZED
    );
  }
}

export class DeleteUserBookmarkWithAuthFailException extends HttpException {
  constructor(userId: string, userBookmarkId: string, errorMessage: string) {
    super(
      `[-] DeleteBookmarkWithAuthUsecse : User(${userId} failed to delete the userBookmark(${userBookmarkId}) due to eror (${errorMessage}))`,
      HttpStatus.UNAUTHORIZED
    );
  }
}

import { HttpException, HttpStatus } from '@nestjs/common';

export enum BoookmarksErrorCode {
  BOOKMARK_ADD_GOOGLE_EVENT_FAILED = 'BOOKMARK_ADD_GOOGLE_EVENT_FAILED',
}

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

export class AddBookmarkInGoogleEventsException extends HttpException {
  constructor(requestUserId: string, bookmarkId: string) {
    super(
      `[-] AddBookmarkInGoogleEventsUsecse : User(${requestUserId} failed to add the bookmark(${bookmarkId}) to google events due to error`,
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}

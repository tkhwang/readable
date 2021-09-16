import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAuthTokenRefreshTokenNotFoundException extends HttpException {
  constructor(userId: string, oauthUserId: string) {
    super(
      `[-] UserAuthTokenRefreshTokenNotFoundException : User(${userId} OAuthUser(${oauthUserId})'s accessToken and refreshToken are not found.))`,
      HttpStatus.UNAUTHORIZED
    );
  }
}

export class UnauthorizedDeleteUserBookmarkWithAuthException extends HttpException {
  constructor(userId: string, userBookmarkId: string) {
    super(
      `[-] UnauthorizedDeleteUserBookmarkWithAuthException : User(${userId} doesn't have the userBookmark(${userBookmarkId}))`,
      HttpStatus.UNAUTHORIZED
    );
  }
}

export class DeleteUserBookmarkWithAuthFailException extends HttpException {
  constructor(userId: string, userBookmarkId: string, errorMessage: string) {
    super(
      `[-] DeleteUserBookmarkWithAuthFailException : User(${userId} failed to delete the userBookmark(${userBookmarkId}) due to eror (${errorMessage}))`,
      HttpStatus.UNAUTHORIZED
    );
  }
}

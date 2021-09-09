import { HttpException, HttpStatus } from '@nestjs/common';

export enum UserFollowErrorCode {
  NO_NEED_FOLLOWING_YOURSELF = 'NO_NEED_FOLLOWING_YOURSELF',
}

export class FollowingUserNotFoundException extends HttpException {
  constructor(followingUserId: string) {
    super(
      `[-] FollowingUserNotFoundException : Following user (${followingUserId}) not found.`,
      HttpStatus.BAD_REQUEST
    );
  }
}

export class NoNeedFollowYourselfException extends HttpException {
  constructor(followingUserId: string) {
    super(
      `[-] NoNeedFollowYourselfException : No need for user (${followingUserId}) to follow yourself.`,
      HttpStatus.BAD_REQUEST
    );
  }
}

export class FollowUserFailedException extends HttpException {
  constructor(followerUserId: string, followingUserId: string, error: Error) {
    super(
      `[-] FollowUserFailedException : Follow user (${followerUserId}) failed for user (${followingUserId}) due to error (${error.message}))`,
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}

export class UnfollowUserFailedException extends HttpException {
  constructor(followerUserId: string, followingUserId: string, error: Error) {
    super(
      `[-] UnfollowUserFailedException : Unfollow user (${followerUserId}) failed for user (${followingUserId}) due to error (${error.message}))`,
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}

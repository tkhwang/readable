import { HttpException, HttpStatus } from '@nestjs/common';

export enum UserFollowErrorCode {
  NO_NEED_FOLLOWING_YOURSELF = 'NO_NEED_FOLLOWING_YOURSELF',
}

export class NoNeedFollowYourselfException extends HttpException {
  constructor(followingUserId: string) {
    super(
      `[-] NoNeedFollowYourselfException : No need for user (${followingUserId}) to follow yourself.`,
      HttpStatus.BAD_REQUEST
    );
  }
}

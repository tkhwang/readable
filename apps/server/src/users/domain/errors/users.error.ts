import { HttpException, HttpStatus } from '@nestjs/common';

export enum UsersErrorCode {
  USER_NOT_FOUND = 'USER_NOT_FOUND',
}

export class UserNotFoundException extends HttpException {
  constructor(userId: string) {
    super(`[-] UserNotFoundException : User(${userId} not found.`, HttpStatus.BAD_REQUEST);
  }
}

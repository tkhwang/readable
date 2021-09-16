import { HttpException, HttpStatus } from '@nestjs/common';

export class OAuthUserNotFoundExcepiton extends HttpException {
  constructor(userId: string) {
    super(`[-] OAuthUserNotFoundExcepiton : User(${userId}  OAuthUser not found.`, HttpStatus.BAD_REQUEST);
  }
}

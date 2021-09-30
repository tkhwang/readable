import { HttpException, HttpStatus } from '@nestjs/common';

export class OAuthUserNotFoundException extends HttpException {
  constructor(userId: string) {
    super(`[-] OAuthUserNotFoundException : User(${userId}  OAuthUser not found.`, HttpStatus.BAD_REQUEST);
  }
}

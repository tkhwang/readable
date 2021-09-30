import { HttpException, HttpStatus } from '@nestjs/common';

export class TagNotFoundException extends HttpException {
  constructor(tagId: string) {
    super(`[-] TagNotFoundException : Tag(${tagId} not found.`, HttpStatus.BAD_REQUEST);
  }
}

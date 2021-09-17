import { HttpException, HttpStatus } from '@nestjs/common';

export class TagNotFoundExcepiton extends HttpException {
  constructor(tagId: string) {
    super(`[-] TagNotFoundExcepiton : Tag(${tagId} not found.`, HttpStatus.BAD_REQUEST);
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { AddBookmarkUsercase } from './usecases/add-bookmark/add-bookmark.usecase';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly addBookmarkUsercase: AddBookmarkUsercase) {}

  @Post('add')
  async addBookmark(@Body('url') url: string) {
    return this.addBookmarkUsercase.execute({ url });
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { AddBookmarkUsecase } from './usecases/add-bookmark/add-bookmark.usecase';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly AddBookmarkUsecase: AddBookmarkUsecase) {}

  @Post('add')
  async addBookmark(@Body('url') url: string) {
    return this.AddBookmarkUsecase.execute({ url });
  }
}

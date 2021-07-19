import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddBookmarkUsecase } from './usecases/add-bookmark/add-bookmark.usecase';
import { GetUrlInfoUsecase } from './usecases/get-urlinfo/get-urlinfo.usecase';

@Controller('bookmarks')
export class BookmarksController {
  constructor(
    private readonly AddBookmarkUsecase: AddBookmarkUsecase,
    private readonly getUrlInfoUsecase: GetUrlInfoUsecase
  ) {}

  @Post('/')
  async getUrlInfo(@Body('url') url: string) {
    return this.getUrlInfoUsecase.execute({ url });
  }

  @Post('add')
  async addBookmark(@Body('url') url: string) {
    return this.AddBookmarkUsecase.execute({ url });
  }
}

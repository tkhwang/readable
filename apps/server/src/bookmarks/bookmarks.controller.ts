import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { RequestWithInjectedUser } from '@readable/auth/domain/auth.type';
import { JwtAuthGuard } from '@readable/auth/domain/jwt-auth.guard';
import { AddBookmarkWithAuthUsecase } from './usecases/add-bookmark-with-auth/add-bookmark-with-auth.usecase';
import { AddBookmarkUsecase } from './usecases/add-bookmark/add-bookmark.usecase';
import { GetUrlInfoUsecase } from './usecases/get-urlinfo/get-urlinfo.usecase';

@Controller('bookmarks')
export class BookmarksController {
  constructor(
    private readonly addBookmarkUsecase: AddBookmarkUsecase,
    private readonly addBookmarkWithAuthUsecase: AddBookmarkWithAuthUsecase,
    private readonly getUrlInfoUsecase: GetUrlInfoUsecase
  ) {}

  @Post('/')
  async getUrlInfo(@Body('url') url: string) {
    return this.getUrlInfoUsecase.execute({ url });
  }

  @UseGuards(JwtAuthGuard)
  @Post('add')
  async addBookmarkWithAuth(@Body('url') url: string, @Request() req: RequestWithInjectedUser) {
    const requestUser = req.user;
    return this.addBookmarkWithAuthUsecase.execute({ url }, requestUser);
  }
}

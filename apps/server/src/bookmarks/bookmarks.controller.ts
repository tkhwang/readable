import { GetUrlInfoUsecase } from './usecases/get-url-info/get-url-info.usecase';
import { Request, Response } from 'express';
import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly getUrlInfoUsecase: GetUrlInfoUsecase) {}

  @Post('urlInfo')
  async urlInfo(@Body('url') url: string) {
    return this.getUrlInfoUsecase.execute({ url });
  }
}

import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { RequestWithInjectedUser } from '@readable/auth/domain/auth.type';
import { JwtAuthGuard } from '@readable/auth/domain/jwt-auth.guard';
import { ExtractUrlInfoUsecase } from './applications/usecases/extract-url-info/extract-url-info.usecase';

@Controller('url-info')
export class UrlInfoController {
  constructor(private readonly extractUrlInfoUsecase: ExtractUrlInfoUsecase) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async getUrlInfo(@Body('url') url: string, @Request() req: RequestWithInjectedUser) {
    const requestUser = req.user;

    return this.extractUrlInfoUsecase.execute(url, requestUser);
  }
}

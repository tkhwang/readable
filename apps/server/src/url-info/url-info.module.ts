import { Module } from '@nestjs/common';
import { UrlInfoResolver } from './url-info.resolver';
import { UrlInfoController } from './url-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlInfoRepository } from './infrastructures/typeorm/repositories/url-info.repository';
import { ExtractUrlInfoUsecase } from './applications/usecases/extract-url-info/extract-url-info.usecase';
import { UrlInfoService } from './url-info.service';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UrlInfoRepository, UserBookmarkRepository])],
  providers: [UrlInfoResolver, UrlInfoService, ExtractUrlInfoUsecase],
  controllers: [UrlInfoController],
  exports: [UrlInfoService],
})
export class UrlInfoModule {}

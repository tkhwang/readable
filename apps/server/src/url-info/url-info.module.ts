import { Module } from '@nestjs/common';
import { UrlInfoResolver } from './url-info.resolver';
import { UrlInfoController } from './url-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlInfoRepository } from './infrastructures/typeorm/repositories/url-info.repository';
import { ExtractUrlInfoUsecase } from './applications/usecases/extract-url-info/extract-url-info.usecase';
import { UrlInfoService } from './url-info.service';
import { UserBookmarkRepository } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.repository';
import { ImageModule } from '@readable/image/image.module';
import { InterestsModule } from '@readable/interests/interests.module';
import { InterestsRepository } from '@readable/interests/infrastructures/typeorm/repositories/interest.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UrlInfoRepository, UserBookmarkRepository, InterestsRepository]),
    ImageModule,
    InterestsModule,
  ],
  providers: [UrlInfoResolver, UrlInfoService, ExtractUrlInfoUsecase],
  controllers: [UrlInfoController],
  exports: [UrlInfoService],
})
export class UrlInfoModule {}

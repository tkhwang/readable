import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlInfoRepository } from '@readable/url-info/infrastructures/typeorm/repositories/url-info.repository';
import { UrlInfoModule } from '@readable/url-info/url-info.module';
import { AddUserBookmarkWithAuthUsecase } from './applications/usecases/add-user-bookmark-with-auth/add-user-bookmark-with-auth.usecase';
import { UserBookmarkController } from './user-bookmark.controller';
import { UserBookmarkResolver } from './user-bookmark.resolver';
import { UserBookmarkService } from './user-bookmark.service';

@Module({
  imports: [TypeOrmModule.forFeature([UrlInfoRepository]), UrlInfoModule],
  controllers: [UserBookmarkController],
  providers: [UserBookmarkResolver, UserBookmarkService, AddUserBookmarkWithAuthUsecase],
})
export class UserBookmarkModule {}

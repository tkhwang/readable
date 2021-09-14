import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageModule } from '@readable/image/image.module';
import { InterestsRepository } from '@readable/interests/infrastructures/typeorm/repositories/interest.repository';
import { InterestsModule } from '@readable/interests/interests.module';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { TagsModule } from '@readable/tags/tags.module';
import { UrlInfoRepository } from '@readable/url-info/infrastructures/typeorm/repositories/url-info.repository';
import { UrlInfoModule } from '@readable/url-info/url-info.module';
import { AddUserBookmarkWithAuthUsecase } from './applications/usecases/add-user-bookmark-with-auth/add-user-bookmark-with-auth.usecase';
import { GetMyUserBookmarksWithAuth } from './applications/usecases/get-my-user-bookmarks-with-auth/get-my-user-bookmarks-with-auth.usecase';
import { UserBookmarkRepository } from './infrastructures/typeorm/repositories/user-bookmark.repository';
import { UserBookmarkController } from './user-bookmark.controller';
import { UserBookmarkResolver } from './user-bookmark.resolver';
import { UserBookmarkService } from './user-bookmark.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UrlInfoRepository, UserBookmarkRepository, InterestsRepository, TagsRepository]),
    InterestsModule,
    TagsModule,
    ImageModule,
    UrlInfoModule,
  ],
  controllers: [UserBookmarkController],
  providers: [UserBookmarkResolver, UserBookmarkService, AddUserBookmarkWithAuthUsecase, GetMyUserBookmarksWithAuth],
  exports: [UserBookmarkService],
})
export class UserBookmarkModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageModule } from '@readable/image/image.module';
import { InterestsRepository } from '@readable/interests/infrastructures/typeorm/repositories/interest.repository';
import { InterestsModule } from '@readable/interests/interests.module';
import { RecommendModule } from '@readable/recommend/recommend.module';
import { SearchModule } from '@readable/search/search.module';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { TagsModule } from '@readable/tags/tags.module';
import { UrlInfoRepository } from '@readable/url-info/infrastructures/typeorm/repositories/url-info.repository';
import { UrlInfoModule } from '@readable/url-info/url-info.module';
import { OAuthUsersRepository } from '@readable/users/infrastructures/typeorm/repositories/oauthUsers.repository';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { AddUserBookmarkWithAuthUsecase } from './applications/usecases/add-user-bookmark-with-auth/add-user-bookmark-with-auth.usecase';
import { DeleteUserBookmarkWithAuthUsecase } from './applications/usecases/delete-user-bookmark-with-auth/delete-user-bookmark-with-auth.usecase';
import { FindMyUserBookmarksGroupedByInterestsUsecase } from './applications/usecases/find-my-userBookmarks-grouped-by-interests/find-my-userBookmarks-grouped-by-interests.usecase';
import { GetMyUserBookmarksWithAuthUsecase } from './applications/usecases/get-my-user-bookmarks-with-auth/get-my-user-bookmarks-with-auth.usecase';
import { SyncGoogleCalendaerWithAuthUsecase } from './applications/usecases/sync-google-calendar-with-auth/sync-google-calendar-with-auth.usecase';
import { UserBookmarkRepository } from './infrastructures/typeorm/repositories/user-bookmark.repository';
import { UserBookmarkController } from './user-bookmark.controller';
import { UserBookmarkResolver } from './user-bookmark.resolver';
import { UserBookmarkService } from './user-bookmark.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UrlInfoRepository,
      UserBookmarkRepository,
      InterestsRepository,
      TagsRepository,
      UsersRepository,
      OAuthUsersRepository,
    ]),
    InterestsModule,
    TagsModule,
    ImageModule,
    UrlInfoModule,
    SearchModule,
    RecommendModule,
  ],
  controllers: [UserBookmarkController],
  providers: [
    UserBookmarkResolver,
    UserBookmarkService,
    GetMyUserBookmarksWithAuthUsecase,
    AddUserBookmarkWithAuthUsecase,
    DeleteUserBookmarkWithAuthUsecase,
    SyncGoogleCalendaerWithAuthUsecase,
    FindMyUserBookmarksGroupedByInterestsUsecase,
  ],
  exports: [UserBookmarkService, AddUserBookmarkWithAuthUsecase],
})
export class UserBookmarkModule {}

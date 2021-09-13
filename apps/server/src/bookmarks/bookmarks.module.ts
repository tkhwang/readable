import { Module } from '@nestjs/common';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarksController } from './bookmarks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddBookmarkWithAuthUsecase } from './applications/usecases/add-bookmark-with-auth/add-bookmark-with-auth.usecase';
import { GetMyBookmarksUsecase } from './applications/usecases/get-my-bookmarks/get-my-bookmarks.usecase';
import { GetUrlInfoUsecase } from './applications/usecases/get-urlinfo/get-urlinfo.usecase';
import { BookmarksRepository } from './infrastructures/typeorm/repositories/bookmarks.repository';
import { BookmarkUsersRepository } from './infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { BookmarksService } from './bookmarks.service';
import { DeleteBookmarkWithAuthUsecse } from './applications/usecases/delete-bookmark-with-auth/delete-bookmark-with-auth.usecase';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { TagsRepository } from '../tags/infrastructures/typeorm/repositories/tags.repository';
import { AddBookmarkInGoogleEventsUsecase } from './applications/usecases/add-in-google-events/add-in-google-events.usecase';
import { OAuthUsersRepository } from '@readable/users/infrastructures/typeorm/repositories/oauthUsers.repository';
import { InterestsRepository } from '@readable/interests/infrastructures/mongo/repositories/interest.repository';
import { GetMyInterestsWithAuthUsecase } from '@readable/interests/applications/usecases/get-my-interests-with-auth/get-my-interests-with-auth.usecase';
import { InterestsModule } from '@readable/interests/interests.module';
import { ImageModule } from '@readable/image/image.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookmarksRepository,
      BookmarkUsersRepository,
      UsersRepository,
      TagsRepository,
      OAuthUsersRepository,
      InterestsRepository,
    ]),
    InterestsModule,
    ImageModule,
  ],
  providers: [
    BookmarksResolver,
    BookmarksService,
    GetMyBookmarksUsecase,
    GetUrlInfoUsecase,
    AddBookmarkWithAuthUsecase,
    DeleteBookmarkWithAuthUsecse,
    AddBookmarkInGoogleEventsUsecase,
    GetMyInterestsWithAuthUsecase,
  ],
  controllers: [BookmarksController],
  exports: [BookmarksService],
})
export class BookmarksModule {}

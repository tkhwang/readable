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
import { KeywordsRepository } from './infrastructures/typeorm/repositories/keywords.repository';
import { AddBookmarkInGoogleEventsUsecase } from './applications/usecases/add-in-google-events/add-in-google-events.usecase';
import { OAuthUsersRepository } from '@readable/users/infrastructures/typeorm/repositories/oauthUsers.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookmarksRepository,
      BookmarkUsersRepository,
      UsersRepository,
      KeywordsRepository,
      OAuthUsersRepository,
    ]),
  ],
  providers: [
    BookmarksResolver,
    BookmarksService,
    GetMyBookmarksUsecase,
    GetUrlInfoUsecase,
    AddBookmarkWithAuthUsecase,
    DeleteBookmarkWithAuthUsecse,
    AddBookmarkInGoogleEventsUsecase,
  ],
  controllers: [BookmarksController],
  exports: [BookmarksService],
})
export class BookmarksModule {}

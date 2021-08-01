import { Module } from '@nestjs/common';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarksController } from './bookmarks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddBookmarkWithAuthUsecase } from './applications/usecases/add-bookmark-with-auth/add-bookmark-with-auth.usecase';
import { GetMyBookmarksUsecase } from './applications/usecases/get-my-bookmarks/get-my-bookmarks.usecase';
import { GetUrlInfoUsecase } from './applications/usecases/get-urlinfo/get-urlinfo.usecase';
import { Bookmark } from './infrastructures/typeorm/entities/bookmark.entity';
import { BookmarksRepository } from './infrastructures/typeorm/repositories/bookmarks.repository';
import { BookmarkUsersRepository } from './infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { BookmarkUser } from './infrastructures/typeorm/entities/bookmarkUser.entity';
import { BookmarksService } from './bookmarks.service';
import { DeleteBookmarkWithAuthUsecse } from './applications/usecases/delete-bookmark-with-auth/delete-bookmark-with-auth.usecase';
import { User } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Bookmark,
      BookmarksRepository,
      BookmarkUser,
      BookmarkUsersRepository,
      // User,
      // UsersRepository,
    ]),
  ],
  providers: [
    BookmarksResolver,
    BookmarksService,
    // BookmarksRepository,
    // BookmarkUsersRepository,
    GetMyBookmarksUsecase,
    GetUrlInfoUsecase,
    AddBookmarkWithAuthUsecase,
    DeleteBookmarkWithAuthUsecse,
  ],
  controllers: [BookmarksController],
  exports: [BookmarksService /*BookmarksRepository, BookmarkUsersRepository */],
})
export class BookmarksModule {}

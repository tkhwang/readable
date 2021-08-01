import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarksModule } from '@readable/bookmarks/bookmarks.module';
import { Bookmark } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmark.entity';
import { BookmarkUser } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmarkUser.entity';
import { BookmarksRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarks.repository';
import { BookmarkUsersRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { GetPaginationBookmarksUsecase } from './paginationBookmarks/applications/usecases/get-pagination-bookmarks/get-pagination-bookmarks.usecase';
import { PaginationBookmarksResolver } from './paginationBookmarks/paginationBookmarks.resolver';
import { PaginationBookmarksService } from './paginationBookmarks/paginationBookmarks.service';

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
    BookmarksModule,
  ],
  providers: [PaginationBookmarksResolver, PaginationBookmarksService, GetPaginationBookmarksUsecase],
})
export class PaginationModule {}

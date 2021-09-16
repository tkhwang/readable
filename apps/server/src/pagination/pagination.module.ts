import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarksModule } from '@readable/bookmarks/bookmarks.module';
import { Bookmark } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmark.entity';
import { BookmarkUser } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmarkUser.entity';
import { BookmarksRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarks.repository';
import { BookmarkUsersRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { GetPaginationBookmarksUsecase } from './paginationBookmarks/applications/usecases/get-pagination-bookmarks/get-pagination-bookmarks.usecase';
import { PaginationBookmarksResolver } from './paginationBookmarks/paginationBookmarks.resolver';
import { PaginationBookmarksService } from './paginationBookmarks/paginationBookmarks.service';
import { GetPaginationUserBookmarksUsecase } from './paginationUserBookmarks/applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.usecase';
import { PaginationUserBookmarksResolver } from './paginationUserBookmarks/paginationUserBookmarks.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Bookmark,
      BookmarksRepository,
      BookmarkUser,
      BookmarkUsersRepository,
      UserBookmarkRepository,
      TagsRepository,
    ]),
    BookmarksModule,
  ],
  providers: [
    PaginationBookmarksResolver,
    PaginationUserBookmarksResolver,
    PaginationBookmarksService,
    GetPaginationBookmarksUsecase,
    GetPaginationUserBookmarksUsecase,
  ],
})
export class PaginationModule {}

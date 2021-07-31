import { Module } from '@nestjs/common';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarksController } from './bookmarks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddBookmarkWithAuthUsecase } from './usecases/add-bookmark-with-auth/add-bookmark-with-auth.usecase';
import { GetMyBookmarksUsecase } from './usecases/get-my-bookmarks/get-my-bookmarks.usecase';
import { GetUrlInfoUsecase } from './usecases/get-urlinfo/get-urlinfo.usecase';
import { Bookmark } from './infrastructures/typeorm/entities/bookmark.entity';
import { BookmarksRepository } from './infrastructures/typeorm/repositories/bookmarks.repository';
import { BookmarkUserssRepository } from './infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { BookmarkUser } from './infrastructures/typeorm/entities/bookmarkUser.entity';
import { BookmarksService } from './bookmarks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Bookmark, BookmarkUser])],
  providers: [
    BookmarksService,
    BookmarksResolver,
    AddBookmarkWithAuthUsecase,
    GetMyBookmarksUsecase,
    GetUrlInfoUsecase,
    BookmarksRepository,
    BookmarkUserssRepository,
  ],
  controllers: [BookmarksController],
  exports: [BookmarksService],
})
export class BookmarksModule {}

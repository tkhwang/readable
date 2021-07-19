import { Module } from '@nestjs/common';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarksController } from './bookmarks.controller';
import { AddBookmarkUsecase } from './usecases/add-bookmark/add-bookmark.usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetBookmarksUsecase } from './usecases/get-bookmarks/get-bookmarks.usecase';
import { Bookmark } from './infrastructures/typeorm/bookmark.entity';
import { AddBookmarkWithAuthUsecase } from './usecases/add-bookmark-with-auth/add-bookmark-with-auth.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Bookmark])],
  providers: [BookmarksResolver, AddBookmarkUsecase, GetBookmarksUsecase, AddBookmarkWithAuthUsecase],
  controllers: [BookmarksController],
})
export class BookmarksModule {}

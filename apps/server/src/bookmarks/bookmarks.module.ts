import { Module } from '@nestjs/common';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarksController } from './bookmarks.controller';
import { AddBookmarkUsecase } from './usecases/add-bookmark/add-bookmark.usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetBookmarksUsecase } from './usecases/get-bookmarks/get-bookmarks.usecase';
import { Bookmark } from './infrastructures/typeorm/bookmark.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bookmark])],
  providers: [BookmarksResolver, AddBookmarkUsecase, GetBookmarksUsecase],
  controllers: [BookmarksController],
})
export class BookmarksModule {}

import { Module } from '@nestjs/common';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarksController } from './bookmarks.controller';
import { AddBookmarkUsecase } from './usecases/add-bookmark/add-bookmark.usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarkEntity } from './infrastructures/typeorm/bookmark.entity';
import { GetBookmarksUsecase } from './usecases/get-bookmarks/get-bookmarks.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([BookmarkEntity])],
  providers: [BookmarksResolver, AddBookmarkUsecase, GetBookmarksUsecase],
  controllers: [BookmarksController],
})
export class BookmarksModule {}

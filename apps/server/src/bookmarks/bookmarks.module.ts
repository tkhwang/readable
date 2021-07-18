import { Module } from '@nestjs/common';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarksController } from './bookmarks.controller';
import { AddBookmarkUsercase } from './usecases/add-bookmark/add-bookmark.usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarkEntity } from './infrastructures/typeorm/bookmark.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookmarkEntity])],
  providers: [BookmarksResolver, AddBookmarkUsercase],
  controllers: [BookmarksController],
})
export class BookmarksModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarksRepository } from './bookmarks.repository';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarksService } from './bookmarks.service';
import { Bookmark, BookmarkSchema } from './models/bookmark.entity';
import { GetUrlInfoUsecase } from './usecases/get-url-info/get-url-info.usecase';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bookmark.name, schema: BookmarkSchema }])],
  providers: [BookmarksResolver, BookmarksService, GetUrlInfoUsecase, BookmarksRepository],
})
export class BookmarksModule {}

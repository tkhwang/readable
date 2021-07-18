import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarksRepository } from './bookmarks.repository';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarksService } from './bookmarks.service';
import { GetUrlInfoUsecase } from './usecases/get-url-info/get-url-info.usecase';
import { BookmarksController } from './bookmarks.controller';
import { Bookmark, BookmarkSchema } from './infrastructures/mongo/bookmark.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bookmark.name, schema: BookmarkSchema }])],
  providers: [BookmarksResolver, BookmarksService, GetUrlInfoUsecase, BookmarksRepository],
  controllers: [BookmarksController],
})
export class BookmarksModule {}

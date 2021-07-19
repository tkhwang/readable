import { Module } from '@nestjs/common';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarksController } from './bookmarks.controller';
import { AddBookmarkUsecase } from './usecases/add-bookmark/add-bookmark.usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from './infrastructures/typeorm/bookmark.entity';
import { AddBookmarkWithAuthUsecase } from './usecases/add-bookmark-with-auth/add-bookmark-with-auth.usecase';
import { GetMyBookmarksUsecase } from './usecases/get-my-bookmarks/get-my-bookmarks.usecase';
import { GetAnonymousBookmarksUsecase } from './usecases/get-anonymous-bookmarks/get-anonymous-bookmarks.usecase';
import { GetUrlInfoUsecase } from './usecases/get-urlinfo/get-urlinfo.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Bookmark])],
  providers: [
    BookmarksResolver,
    AddBookmarkUsecase,
    GetAnonymousBookmarksUsecase,
    AddBookmarkWithAuthUsecase,
    GetMyBookmarksUsecase,
    GetUrlInfoUsecase,
  ],
  controllers: [BookmarksController],
})
export class BookmarksModule {}

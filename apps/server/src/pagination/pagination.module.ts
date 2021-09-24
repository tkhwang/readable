import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { TagsModule } from '@readable/tags/tags.module';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { GetPaginationUserBookmarksUsecase } from './paginationUserBookmarks/applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.usecase';
import { PaginationUserBookmarksResolver } from './paginationUserBookmarks/paginationUserBookmarks.resolver';
import { PaginationService } from './pagination.service';
import { PaginationUserBookmarksService } from './paginationUserBookmarks/paginationUserBookmarks.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserBookmarkRepository, TagsRepository]), TagsModule],
  providers: [
    PaginationUserBookmarksResolver,
    PaginationUserBookmarksService,
    GetPaginationUserBookmarksUsecase,
    PaginationService,
  ],
})
export class PaginationModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { TagsModule } from '@readable/tags/tags.module';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { GetPaginationUserBookmarksUsecase } from './userBookmarks/applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.usecase';
import { PaginationUserBookmarksResolver } from './userBookmarks/paginationUserBookmarks.resolver';
import { PaginationService } from './pagination.service';
import { GetPaginationTagsUsecase } from './tags/applications/usecases/get-pagination-tags/get-pagination-tags.usecase';
import { PaginationTagsResolver } from './tags/paginationTags.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserBookmarkRepository, TagsRepository]), TagsModule],
  providers: [
    PaginationUserBookmarksResolver,
    PaginationTagsResolver,
    PaginationService,
    GetPaginationUserBookmarksUsecase,
    GetPaginationTagsUsecase,
  ],
})
export class PaginationModule {}

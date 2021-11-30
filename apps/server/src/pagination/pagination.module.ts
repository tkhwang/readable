import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { TagsModule } from '@readable/tags/tags.module';
import { UserBookmarkRepository } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.repository';
import { GetPaginationUserBookmarksUsecase } from './userBookmarks/applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.usecase';
import { PaginationUserBookmarksResolver } from './userBookmarks/paginationUserBookmarks.resolver';
import { PaginationService } from './pagination.service';
import { GetPaginationTagsUsecase } from './tags/applications/usecases/get-pagination-tags/get-pagination-tags.usecase';
import { PaginationTagsResolver } from './tags/paginationTags.resolver';
import { GetPaginationRecommendedUserBookmarksByTagsUsecase } from './userBookmarks/applications/usecases/get-pagination-recommended-user-bookmarks-by-tags/get-pagination-recommended-user-bookmarks-by-tags.usecase';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserBookmarkRepository, TagsRepository, UsersRepository]), TagsModule],
  providers: [
    PaginationUserBookmarksResolver,
    PaginationTagsResolver,
    PaginationService,
    GetPaginationUserBookmarksUsecase,
    GetPaginationTagsUsecase,
    GetPaginationRecommendedUserBookmarksByTagsUsecase,
  ],
})
export class PaginationModule {}

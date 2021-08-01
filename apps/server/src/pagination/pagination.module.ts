import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarksModule } from '@readable/bookmarks/bookmarks.module';
import { BookmarksRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarks.repository';
import { GetPaginationBookmarksUsecase } from './paginationBookmarks/applications/usecases/get-pagination-bookmarks/get-pagination-bookmarks.usecase';
import { PaginationBookmarksResolver } from './paginationBookmarks/paginationBookmarks.resolver';
import { PaginationBookmarksService } from './paginationBookmarks/paginationBookmarks.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookmarksRepository]), BookmarksModule],
  providers: [PaginationBookmarksResolver, PaginationBookmarksService, GetPaginationBookmarksUsecase],
})
export class PaginationModule {}

import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchResolver } from './search.resolver';
import { SearchByTextInAllUrlinfosUsecase } from './applications/usecases/search-by-text-in-all-urlinfos/search-by-text-in-all-urlinfos.usecase';
import { SuggestTagUsecase } from './applications/usecases/suggest-tag/suggest-tag.usecase';
import { SearchController } from './search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBookmarkRepository } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.repository';
import { SearchByTextInAllUserBookmarksUseCase } from './applications/usecases/search-by-text-in-all-userBookmarks/search-by-text-in-all-userBookmarks.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([UserBookmarkRepository])],
  providers: [
    SearchService,
    SearchResolver,
    SearchByTextInAllUserBookmarksUseCase,
    SearchByTextInAllUrlinfosUsecase,
    SuggestTagUsecase,
  ],
  exports: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}

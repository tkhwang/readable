import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchResolver } from './search.resolver';
import { SearchByTextInAllUrlinfosUsecase } from './applications/usecases/search-by-text-in-all-urlinfos/search-by-text-in-all-urlinfos.usecase';
import { SuggestTagUsecase } from './applications/usecases/suggest-tag/suggest-tag.usecase';
import { SearchController } from './search.controller';

@Module({
  providers: [SearchService, SearchResolver, SearchByTextInAllUrlinfosUsecase, SuggestTagUsecase],
  exports: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}

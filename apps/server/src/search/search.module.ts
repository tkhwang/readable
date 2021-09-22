import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchResolver } from './search.resolver';
import { SearchByTextInAllUrlinfosUsecase } from './applications/usecases/search-by-text-in-all-urlinfos/search-by-text-in-all-urlinfos.usecase';

@Module({
  providers: [SearchService, SearchResolver, SearchByTextInAllUrlinfosUsecase],
  exports: [SearchService],
})
export class SearchModule {}

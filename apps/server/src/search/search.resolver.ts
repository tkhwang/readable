import { Args, Query, Resolver } from '@nestjs/graphql';
import { Tag } from '@readable/tags/domain/models/tag.model';
import { UrlInfo } from '@readable/url-info/domain/model/url-info.model';
import { SearchByTextInAllUrlinfosInput } from './applications/usecases/search-by-text-in-all-urlinfos/search-by-text-in-all-urlinfos.input';
import { SearchByTextInAllUrlinfosUsecase } from './applications/usecases/search-by-text-in-all-urlinfos/search-by-text-in-all-urlinfos.usecase';
import { SuggestTagInput } from './applications/usecases/suggest-tag/suggest-tag.input';
import { SuggestTagUsecase } from './applications/usecases/suggest-tag/suggest-tag.usecase';
import { SearchService } from './search.service';

@Resolver(of => UrlInfo)
export class SearchResolver {
  constructor(
    private readonly suggestTagUsecase: SuggestTagUsecase,
    private readonly searchByTextInAllUrlinfosUsecase: SearchByTextInAllUrlinfosUsecase
  ) {}

  /*
   * Query (as noun)
   */
  @Query(returns => [UrlInfo], { nullable: true })
  async allUrlInfosBySearch(@Args('searchByTextInAllUrlinfosInput') query: SearchByTextInAllUrlinfosInput) {
    return this.searchByTextInAllUrlinfosUsecase.execute(query);
  }

  @Query(returns => [Tag], { nullable: true })
  async tagSuggestion(@Args('suggestTagInput') suggestTagInput: SuggestTagInput) {
    return this.suggestTagUsecase.execute(suggestTagInput);
  }

  /*
   * Mutation (as verb)
   */
}

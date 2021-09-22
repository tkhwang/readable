import { Args, Query, Resolver } from '@nestjs/graphql';
import { UrlInfo } from '@readable/url-info/domain/model/url-info.model';
import { SearchByTextInAllUrlinfosInput } from './applications/usecases/search-by-text-in-all-urlinfos/search-by-text-in-all-urlinfos.input';
import { SearchByTextInAllUrlinfosUsecase } from './applications/usecases/search-by-text-in-all-urlinfos/search-by-text-in-all-urlinfos.usecase';

@Resolver(of => UrlInfo)
export class SearchResolver {
  constructor(private readonly searchByTextInAllUrlinfosUsecase: SearchByTextInAllUrlinfosUsecase) {}

  /*
   * Query (as noun)
   */
  @Query(returns => [UrlInfo], { nullable: true })
  async allUrlInfosBySearch(@Args('searchByTextInAllUrlinfosInput') query: SearchByTextInAllUrlinfosInput) {
    return this.searchByTextInAllUrlinfosUsecase.execute(query);
  }

  /*
   * Mutation (as verb)
   */
}

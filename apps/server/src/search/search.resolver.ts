import { Args, Query, Resolver } from '@nestjs/graphql';
import { Tag } from '@readable/tags/domain/models/tag.model';
import { UrlInfo } from '@readable/url-info/domain/model/url-info.model';
import { UserBookmark } from '@readable/user-bookmark/domain/model/user-bookmark.model';
import { SearchByTextInAllUrlinfosInput } from './applications/usecases/search-by-text-in-all-urlinfos/search-by-text-in-all-urlinfos.input';
import { SearchByTextInAllUrlinfosUsecase } from './applications/usecases/search-by-text-in-all-urlinfos/search-by-text-in-all-urlinfos.usecase';
import { SearchByTextInAllUserBookmarksInput } from './applications/usecases/search-by-text-in-all-userBookmarks/search-by-text-in-all-userBookmarks.input';
import { SearchByTextInAllUserBookmarksUseCase } from './applications/usecases/search-by-text-in-all-userBookmarks/search-by-text-in-all-userBookmarks.usecase';
import { SuggestTagInput } from './applications/usecases/suggest-tag/suggest-tag.input';
import { SuggestTagUsecase } from './applications/usecases/suggest-tag/suggest-tag.usecase';

@Resolver(of => UrlInfo)
export class SearchResolver {
  constructor(
    private readonly suggestTagUsecase: SuggestTagUsecase,
    private readonly searchByTextInAllUrlinfosUsecase: SearchByTextInAllUrlinfosUsecase,
    private readonly searchByTextInAllUserBookmarksUseCase: SearchByTextInAllUserBookmarksUseCase
  ) {}

  /*
   * Query (as noun)
   */
  @Query(returns => [UserBookmark], { nullable: true })
  async allUserBookmarksBySearch(
    @Args('searchByTextInAllUserBookmarksInput') query: SearchByTextInAllUserBookmarksInput
  ) {
    return this.searchByTextInAllUserBookmarksUseCase.execute(query);
  }

  /**
   * @deprecated Use instead allUserBookmarksBySearch
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

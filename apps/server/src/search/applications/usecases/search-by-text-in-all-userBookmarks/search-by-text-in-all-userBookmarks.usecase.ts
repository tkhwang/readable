import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { SearchDomain } from '@readable/search/domain/models/search.model';
import { SearchService } from '@readable/search/search.service';
import { UserBookmarkRepository } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.repository';
import { SearchByTextInAllUserBookmarksInput } from './search-by-text-in-all-userBookmarks.input';

@Injectable()
export class SearchByTextInAllUserBookmarksUseCase implements Usecase<SearchByTextInAllUserBookmarksInput, any> {
  constructor(
    private readonly searchService: SearchService,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  async execute(query: SearchByTextInAllUserBookmarksInput) {
    const { query: queryText } = query;

    const {
      data: { hits },
    } = await this.searchService.search(SearchDomain.urlInfo.index, queryText, SearchDomain.urlInfo.properties);

    if (hits.total.value === 0) return [];

    const urlInfoIds = hits.hits.map(({ _id }) => _id);

    return this.userBookmarkRepository.findUserBookmarksByUrlInfoIds(urlInfoIds);
  }
}

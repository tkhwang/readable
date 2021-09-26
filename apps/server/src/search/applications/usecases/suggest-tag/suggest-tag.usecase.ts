import { Injectable } from '@nestjs/common';
import { Usecase } from '@readable/common/applications/usecase';
import { SearchDomain } from '@readable/search/domain/models/search.model';
import { SearchService } from '@readable/search/search.service';
import { SuggestTagInput } from './suggest-tag.input';

@Injectable()
export class SuggestTagUsecase implements Usecase<SuggestTagInput, any> {
  constructor(private readonly searchService: SearchService) {}

  async execute(query: SuggestTagInput) {
    const { query: queryText } = query;

    return this.searchService.suggest(SearchDomain.tag.index, queryText, SearchDomain.tag.searchField);
  }
}

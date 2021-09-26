import { Injectable } from '@nestjs/common';
import { Usecase } from '@readable/common/applications/usecase';
import { SearchDomain } from '@readable/search/domain/models/search.model';
import { SearchService } from '@readable/search/search.service';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';
import { SearchByTextInAllUrlinfosInput } from './search-by-text-in-all-urlinfos.input';

@Injectable()
export class SearchByTextInAllUrlinfosUsecase implements Usecase<SearchByTextInAllUrlinfosInput, Partial<UrlInfo>[]> {
  constructor(private readonly searchService: SearchService) {}

  async execute(query: SearchByTextInAllUrlinfosInput) {
    const { query: queryText } = query;

    const {
      data: { hits },
    } = await this.searchService.search(SearchDomain.urlInfo.index, queryText, SearchDomain.urlInfo.properties);

    if (hits.total.value === 0) return [];

    return hits.hits.map(hit => {
      const {
        _id,
        _source: { url, title, siteName, description },
      } = hit;

      return {
        id: _id,
        url,
        title,
        siteName,
        description,
      };
    });
  }
}

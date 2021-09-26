import { registerEnumType } from '@nestjs/graphql';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';

export enum SearchIndex {
  UrlInfo = 'urlinfo',
  Tag = 'tag',
}

registerEnumType(SearchIndex, {
  name: 'SearchIndex',
  description: 'Search index name',
});

export const SearchDomain = {
  urlInfo: {
    index: SearchIndex.UrlInfo,
    properties: ['id', 'url', 'title', 'siteName', 'description'],
  },
  tag: {
    index: SearchIndex.Tag,
    properties: ['id', 'tag', 'normalizedTag'],
    searchField: 'tag',
  },
};

export type UrlInfoSearchDoc = Pick<UrlInfo, 'id' | 'url' | 'title' | 'siteName' | 'description'>;
export type TagSearchDoc = Pick<Tag, 'id' | 'tag' | 'normalizedTag'>;

export type SearchDoc = UrlInfoSearchDoc | TagSearchDoc;

import { gql } from '@apollo/client';
import { useAllUrlInfosBySearchOnSearchQuery } from './data-access-search.query.generated';
import {
  DEFAULT_CARD_COVER_IMAGE_URL,
  DEFAULT_FAVICON_IMAGE_URL,
  DEFAULT_PROFILE_IMAGE_URL,
} from '@readable/shared/util-common';

const graphql = gql`
  query AllUrlInfosBySearchOnSearch($searchByTextInAllUrlinfosInput: SearchByTextInAllUrlinfosInput!) {
    allUrlInfosBySearch(searchByTextInAllUrlinfosInput: $searchByTextInAllUrlinfosInput) {
      id
      url
      title
      siteName
      description
    }
  }
`;

export function useDataAccessSearch(query: string) {
  const { data: searchData, loading: isSearchDataLoading } = useAllUrlInfosBySearchOnSearchQuery({
    variables: {
      searchByTextInAllUrlinfosInput: {
        query,
      },
    },
  });

  // TODO(zlrlo): 페이지네이션으로 변경 필요
  // const pageInfo = feedData?.paginationUserBookmarks?.pageInfo;
  const edges = searchData?.allUrlInfosBySearch;

  const entries = edges?.map(edge => {
    const urlInfo = {
      id: edge.id,
      cardImageUrl: DEFAULT_CARD_COVER_IMAGE_URL,
      description: edge.description ?? 'description',
      siteName: edge.siteName ?? 'siteName',
      title: edge.title ?? 'title',
      logoImageUrl: DEFAULT_FAVICON_IMAGE_URL,
      url: 'url',
    };

    const cardOwner = {
      profileImageUrl: DEFAULT_PROFILE_IMAGE_URL,
      name: 'name',
    };

    const tags = [{ id: '1', name: 'tag' }];
    return { urlInfo, cardOwner, tags, bookmarkersCount: 0, readersCount: 0 };
  });

  return { entries };
}

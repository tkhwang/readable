import { gql } from '@apollo/client';
import { useAllUrlInfosBySearchQuery } from './useSearchText.query.generated';

const SEARCH_BY_TEXT_IN_ALL_URLINFOS = gql`
  query AllUrlInfosBySearch($searchByTextInAllUrlinfosInput: SearchByTextInAllUrlinfosInput!) {
    allUrlInfosBySearch(searchByTextInAllUrlinfosInput: $searchByTextInAllUrlinfosInput) {
      id
      url
      title
      siteName
      description
    }
  }
`;

export function useSearchText(query: string) {
  const { data, loading, error } = useAllUrlInfosBySearchQuery({
    variables: {
      searchByTextInAllUrlinfosInput: {
        query,
      },
    },
  });

  const allUrlInfosBySearch = data?.allUrlInfosBySearch;

  return {
    allUrlInfosBySearch,
    loading,
    error,
  };
}

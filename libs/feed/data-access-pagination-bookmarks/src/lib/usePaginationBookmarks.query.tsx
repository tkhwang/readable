import { gql } from '@apollo/client';
import { ViewModel } from '@readable/shared/types';
import { usePaginationBookmarksQuery } from './usePaginationBookmarks.query.generated';

const PAGINATION_BOOKMARKS = gql`
  query PaginationBookmarks {
    paginationBookmarks(getPaginationBookmarksInput: {}) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          siteName
          collector {
            id
            name
            provider
          }
        }
      }
    }
  }
`;

export type PaginationBookmarksViewModel = ViewModel<typeof usePaginationBookmarksViewModel>;

export function usePaginationBookmarksViewModel() {
  const { data, loading, error } = usePaginationBookmarksQuery();

  return {
    paginationBookmarks: data?.paginationBookmarks ?? [],
    loading,
    error,
  };
}

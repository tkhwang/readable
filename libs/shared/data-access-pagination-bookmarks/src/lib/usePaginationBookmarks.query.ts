import { gql } from '@apollo/client';
import { ViewModel } from '../types/ViewModel';
import { usePaginationBookmarksQuery } from './usePaginationBookmarks.query.generated';

const PAGINATION_BOOKMARKS = gql`
  query PaginationBookmarks {
    paginationBookmarks: paginationBookmarks(getPaginationBookmarksInput: {}) {
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

export type PaginationBookmarksViewModel = ViewModel<typeof usePaginationBookmarks>;

export function usePaginationBookmarks() {
  const { data, loading, error } = usePaginationBookmarksQuery();

  return {
    data: data?.paginationBookmarks ?? null,
    loading,
    error,
  };
}

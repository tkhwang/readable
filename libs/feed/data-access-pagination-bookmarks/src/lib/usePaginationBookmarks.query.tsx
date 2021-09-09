import { gql } from '@apollo/client';
import { ViewModel } from '@readable/shared/types';
import { usePaginationBookmarksQuery } from './usePaginationBookmarks.query.generated';

const PAGINATION_BOOKMARKS = gql`
  query PaginationBookmarks {
    paginationBookmarks(first: 10) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          siteName
          title
          url
          imageUrl
          tags
          description
          collectors {
            name
            avatarUrl
          }
          schedulers {
            name
            avatarUrl
          }
          finishers {
            name
            avatarUrl
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
    paginationBookmarks: data?.paginationBookmarks,
    loading,
    error,
  };
}

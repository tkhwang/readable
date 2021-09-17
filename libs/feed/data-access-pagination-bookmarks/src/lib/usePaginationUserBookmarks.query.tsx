import { ViewModel } from '@readable/shared/types';
import gql from 'graphql-tag';
import { usePaginationUserBookmarksQuery } from './usePaginationUserBookmarks.query.generated';

const PAGINATION_USER_BOOKMARKS = gql`
  query PaginationUserBookmarks($first: Int, $after: PaginationCursor) {
    paginationUserBookmarks(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          urlHash
          urlInfo {
            id
            url
            urlHash
            title
            siteName
            imageUrl
            description
          }
          interest {
            id
            interest
          }
          tags {
            id
            tag
          }
          bookmarkersCount
          bookmarkers {
            id
            name
            avatarUrl
          }
          readersCount
          readers {
            id
            name
            avatarUrl
          }
        }
      }
    }
  }
`;

export type PaginationUserBookmarksViewModel = ViewModel<typeof usePaginationUserBookmarksViewModel>;

export function usePaginationUserBookmarksViewModel() {
  const { data, loading, error } = usePaginationUserBookmarksQuery();

  return {
    paginationUserBookmarks: data?.paginationUserBookmarks,
    loading,
    error,
  };
}

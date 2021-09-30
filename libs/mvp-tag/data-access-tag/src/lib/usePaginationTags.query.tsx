import { gql } from '@apollo/client';
import { usePaginationTagsQuery } from './usePaginationTags.query.generated';
import { PaginationTagsEdge, ViewModel } from '@readable/shared/types';

const GET_PAGINATION_TAGS = gql`
  query PaginationTags($first: Int, $after: PaginationCursor) {
    paginationTags(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          tag
          normalizedTag
          imageUrl
          description
          followersCount
          userBookmarksCount
          isFollowingTag
        }
      }
    }
  }
`;

export type PaginationTagsViewModel = ViewModel<typeof usePaginationTags>;

export function usePaginationTags() {
  const { data, loading, error } = usePaginationTagsQuery({
    variables: {
      first: 30,
    },
  });

  const paginationTags = data?.paginationTags;

  return {
    paginationTags,
    loading,
    error,
  };
}

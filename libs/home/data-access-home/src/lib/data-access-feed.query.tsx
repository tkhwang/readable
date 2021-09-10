import { gql } from '@apollo/client';
import { usePaginationBookmarksOnFeedQuery } from './data-access-feed.query.generated';

const graphql = gql`
  query PaginationBookmarksOnFeed($first: Int, $after: PaginationCursor) {
    paginationBookmarks(first: $first, after: $after) {
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
          tags {
            id
            tag
          }
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

export function useDataAccessFeed() {
  const { data, fetchMore } = usePaginationBookmarksOnFeedQuery({
    variables: {
      first: 5,
    },
  });

  const pageInfo = data?.paginationBookmarks?.pageInfo;

  const entries = data?.paginationBookmarks?.edges.map(edge => {
    return { id: edge.node.id, cursor: edge.cursor, imageUrl: edge.node.imageUrl };
  });

  const fetchMoreFeed = () => {
    if (pageInfo?.hasNextPage) {
      fetchMore({
        variables: { first: 5, after: pageInfo.endCursor },
      });
    }
  };

  return { entries, pageInfo, fetchMoreFeed };
}

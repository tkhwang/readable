import { gql } from '@apollo/client';
import { usePaginationBookmarksOnFeedQuery } from './data-access-feed.query.generated';

const graphql = gql`
  query PaginationBookmarksOnFeed($first: Int, $after: PaginationCursor) {
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

  const pageInfo = data?.paginationUserBookmarks?.pageInfo;

  const entries = data?.paginationUserBookmarks?.edges.map(edge => {
    const { urlInfo } = edge.node;
    const { id, imageUrl } = urlInfo;

    return { id, cursor: edge.cursor, imageUrl };
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

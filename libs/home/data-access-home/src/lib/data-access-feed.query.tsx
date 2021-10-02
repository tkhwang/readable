import { gql } from '@apollo/client';
import { usePaginationUserBookmarksOnFeedQuery } from './data-access-feed.query.generated';

const graphql = gql`
  query PaginationUserBookmarksOnFeed($first: Int, $after: PaginationCursor) {
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
          bookmarkers {
            id
            name
            email
            avatarUrl
          }
        }
      }
    }
  }
`;

export function useDataAccessFeed() {
  const { data: feedData, loading: isFeedDataLoading, fetchMore } = usePaginationUserBookmarksOnFeedQuery({
    variables: {
      first: 8,
    },
  });

  const pageInfo = feedData?.paginationUserBookmarks?.pageInfo;
  const edges = feedData?.paginationUserBookmarks?.edges;

  const entries = edges?.map(edge => {
    const urlInfo = {
      id: edge.node.urlInfo.id,
      imageUrl: edge.node.urlInfo.imageUrl,
      description: edge.node.urlInfo.description,
      siteName: edge.node.urlInfo.siteName,
      title: edge.node.urlInfo.title,
    };

    const cardOwner = {
      profileImageUrl: edge.node.bookmarkers[0].avatarUrl,
    };

    const tags = edge.node.tags.map(tag => {
      return { id: tag.id, name: tag.tag };
    });

    return { cursor: edge.cursor, ...urlInfo, ...cardOwner, tags };
  });

  const fetchMoreFeedData = () => {
    if (pageInfo?.hasNextPage) {
      fetchMore({
        variables: { first: 8, after: pageInfo.endCursor },
      });
    }
  };

  return { entries, pageInfo, fetchMoreFeedData };
}

import { gql } from '@apollo/client';
import { usePaginationUserBookmarksOnHomeQuery } from './data-access-feed.query.generated';
import {
  DEFAULT_CARD_COVER_IMAGE_URL,
  DEFAULT_FAVICON_IMAGE_URL,
  DEFAULT_PROFILE_IMAGE_URL,
} from '@readable/shared/util-common';

const graphql = gql`
  query PaginationUserBookmarksOnHome($first: Int, $after: PaginationCursor) {
    paginationUserBookmarks(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          urlInfo {
            id
            url
            title
            siteName
            imageUrl
            description
            favicon
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
            email
            avatarUrl
          }
          readersCount
          user {
            id
            nickName
            avatarUrl
          }
        }
      }
    }
  }
`;

export function useDataAccessFeed() {
  const { data: feedData, loading: isFeedDataLoading, fetchMore } = usePaginationUserBookmarksOnHomeQuery({
    variables: {
      first: 8,
    },
  });

  const pageInfo = feedData?.paginationUserBookmarks?.pageInfo;
  const edges = feedData?.paginationUserBookmarks?.edges;

  const entries = edges?.map(
    ({
      node: { urlInfo: serverUrlInfo, bookmarkers, tags: serverTags, bookmarkersCount, readersCount, user },
      cursor,
    }) => {
      const urlInfo = {
        id: serverUrlInfo.id,
        cardImageUrl: serverUrlInfo.imageUrl || DEFAULT_CARD_COVER_IMAGE_URL,
        description: serverUrlInfo.description ?? '',
        siteName: serverUrlInfo.siteName ?? '',
        title: serverUrlInfo.title ?? '',
        logoImageUrl: serverUrlInfo.favicon || DEFAULT_FAVICON_IMAGE_URL,
        url: serverUrlInfo.url,
      };

      // TODO(zlrlo): 수정 필요
      const cardOwner = {
        profileImageUrl: user?.avatarUrl || DEFAULT_PROFILE_IMAGE_URL,
        name: user?.nickName,
      };

      const tags = serverTags.map(serverTag => {
        return { id: serverTag.id, name: serverTag.tag };
      });

      return { cursor: cursor, urlInfo, cardOwner, tags, bookmarkersCount, readersCount };
    }
  );

  const fetchMoreFeedData = () => {
    if (pageInfo?.hasNextPage) {
      fetchMore({
        variables: { first: 8, after: pageInfo.endCursor },
      });
    }
  };

  return { entries, pageInfo, fetchMoreFeedData };
}

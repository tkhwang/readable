import { gql } from '@apollo/client';
import { DEFAULT_PROFILE_IMAGE_URL } from '@readable/shared/util-common';
import { useUsersHavingManyUserBookmarksOnHomeQuery } from './data-access-popular-collector.query.generated';

// TODO(zlrlo): UsersHavingManyFollowersOnHome으로 변경하기
const graphql = gql`
  query UsersHavingManyUserBookmarksOnHome(
    $findUsersHavingManyUserBookmarksWithAuthInput: FindUsersHavingManyUserBookmarksWithAuthInput!
  ) {
    usersHavingManyUserBookmarks(
      findUsersHavingManyUserBookmarksWithAuthInput: $findUsersHavingManyUserBookmarksWithAuthInput
    ) {
      id
      name
      provider
      providerId
      avatarUrl
      followersCount
      followingsCount
      isFollowingUser
    }
  }
`;

export function useDataAccessPopularCollector() {
  const {
    data: popularCollectorData,
    loading: isPopularCollectorDataLoading,
  } = useUsersHavingManyUserBookmarksOnHomeQuery({
    variables: { findUsersHavingManyUserBookmarksWithAuthInput: { howMany: 3 } },
  });

  const popularCollectors = popularCollectorData?.usersHavingManyUserBookmarks.map(
    ({ id, name, avatarUrl, isFollowingUser }) => {
      return {
        id,
        name,
        profileImageUrl: avatarUrl || DEFAULT_PROFILE_IMAGE_URL,
        isFollowingUser,
      };
    }
  );

  return { popularCollectors, isPopularCollectorDataLoading };
}

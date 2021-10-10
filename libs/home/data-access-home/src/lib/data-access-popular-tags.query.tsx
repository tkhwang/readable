import { gql } from '@apollo/client';
import { usePopularTagsOnHomeQuery } from './data-access-popular-tags.query.generated';

const graphql = gql`
  query PopularTagsOnHome($findPopularTagsWithAuthInput: FindPopularTagsWithAuthInput!) {
    popularTags(findPopularTagsWithAuthInput: $findPopularTagsWithAuthInput) {
      id
      tag
      normalizedTag
      imageUrl
      followersCount
      userBookmarksCount
      isFollowingTag
    }
  }
`;

export function useDataAccessPopularTags() {
  const { data: popularTagsData, loading: isPopularTagsDataLoading } = usePopularTagsOnHomeQuery({
    variables: { findPopularTagsWithAuthInput: { howMany: 10 } },
  });

  const popularTags = popularTagsData?.popularTags?.map(({ id, normalizedTag }) => {
    return { key: id, name: normalizedTag };
  });

  return { popularTags, isPopularTagsDataLoading };
}

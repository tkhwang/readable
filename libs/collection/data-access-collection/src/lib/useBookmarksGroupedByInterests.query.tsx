import { gql } from '@apollo/client';
import { useMyUserBookmarksGroupedByInterestsOnCollectionQuery } from './useBookmarksGroupedByInterests.query.generated';

const graphql = gql`
  query MyUserBookmarksGroupedByInterestsOnCollection(
    $findMyUserBookmarksGroupedByInterestsInput: FindMyUserBookmarksGroupedByInterestsInput!
  ) {
    myUserBookmarksGroupedByInterests(
      findMyUserBookmarksGroupedByInterestsInput: $findMyUserBookmarksGroupedByInterestsInput
    ) {
      interest {
        interestId
        interest
      }
      userBookmarks {
        id
        urlInfo {
          id
          url
          title
          imageUrl
        }
      }
    }
  }
`;

export function useDataAccessBookmarksGroupedByInterests() {
  const {
    data: bookmarksGroupedByInterestsData,
    loading: isBookmarksGroupedByInterestsDataLoading,
  } = useMyUserBookmarksGroupedByInterestsOnCollectionQuery({
    variables: { findMyUserBookmarksGroupedByInterestsInput: { limit: 3 } },
  });
  console.log(
    'TCL: useDataAccessBookmarksGroupedByInterests -> bookmarksGroupedByInterestsData',
    bookmarksGroupedByInterestsData
  );

  return {
    bookmarksGroupedByInterests: bookmarksGroupedByInterestsData?.myUserBookmarksGroupedByInterests,
    isBookmarksGroupedByInterestsDataLoading,
  };
}

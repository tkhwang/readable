import { gql } from '@apollo/client';
import { ViewModel } from '@readable/shared/types';
import { useGetMyUserBookmarksQuery } from './useUserBookmarks.query.generated';

const GET_MY_USERBOOKMARKS = gql`
  query GetMyUserBookmarks {
    myUserBookmarks: myUserBookmarks {
      id
      urlHash
      urlInfo {
        id
        url
        urlHash
        siteName
        title
        type
        description
        imageUrl
        summary
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
`;

export type BookmarksViewModel = ViewModel<typeof useUserBookmarks>;

export function useUserBookmarks() {
  const { data: dataMyBookmarks, loading, error, refetch } = useGetMyUserBookmarksQuery();
  const myUserBookmarks = dataMyBookmarks?.myUserBookmarks ?? [];

  return {
    myUserBookmarks,
    loading,
    error,
    refetch,
  };
}

import { gql } from '@apollo/client';
import { ViewModel } from '@readable/shared/types';
import { useDeleteUserBookmarkWithAuthMutation, useGetMyUserBookmarksQuery } from './useUserBookmarks.query.generated';

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
      bookmarkers {
        id
        name
        avatarUrl
      }
      readers {
        id
        name
        avatarUrl
      }
    }
  }
`;

const DELETE_USER_BOOKMARK_WITH_AUTH = gql`
  mutation DeleteUserBookmarkWithAuth($deleteUserBookmarkWithAuthInput: DeleteUserBookmarkWithAuthInput!) {
    deleteUserBookmarkWithAuth(deleteUserBookmarkWithAuthInput: $deleteUserBookmarkWithAuthInput) {
      isSuccess
    }
  }
`;

export type BookmarksViewModel = ViewModel<typeof useUserBookmarks>;

export function useUserBookmarks() {
  const { data: dataMyBookmarks, loading, error, refetch } = useGetMyUserBookmarksQuery();
  const myUserBookmarks = dataMyBookmarks?.myUserBookmarks ?? [];

  const [deleteUserBookmarkWithAuthMutation] = useDeleteUserBookmarkWithAuthMutation({
    onCompleted: () => {
      refetch();
    },
  });

  return {
    myUserBookmarks,
    loading,
    error,
    refetch,
    deleteUserBookmarkWithAuthMutation,
  };
}

import { gql } from '@apollo/client';
import { ViewModel } from '@readable/shared/types';
import { useDeleteBookmarkWithAuthMutation, useGetMyBookmarksQuery } from './useBookmarks.query.generated';

const GET_MY_BOOKMARKS = gql`
  query GetMyBookmarks {
    myBookmarks: myBookmarks {
      id
      url
      type
      siteName
      title
      imageUrl
      description
      tags
      countFactful
      countEmotional
      countInspirational
    }
  }
`;

const DELETE_BOOKMARK_WITH_AUTH = gql`
  mutation DeleteBookmarkWithAuth($deleteBookmarkWithAuthInput: DeleteBookmarkWithAuthInput!) {
    deleteBookmarkWithAuth(deleteBookmarkWithAuthInput: $deleteBookmarkWithAuthInput) {
      isSuccess
    }
  }
`;

export type BookmarksViewModel = ViewModel<typeof useBookmarks>;

export function useBookmarks() {
  const { data: dataMyBookmarks, loading, error, refetch } = useGetMyBookmarksQuery();
  const myBookmarks = dataMyBookmarks?.myBookmarks ?? [];

  const [deleteBookmarkWithAuthMutation] = useDeleteBookmarkWithAuthMutation({
    onCompleted: () => {
      refetch();
    },
  });

  return {
    myBookmarks,
    loading,
    error,
    refetch,
    deleteBookmarkWithAuthMutation,
  };
}

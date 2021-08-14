import { gql } from '@apollo/client';
import { useAddBookmarkInGoogleEventsMutation } from './useSyncBookmarks.mutation.generated';
import { ViewModel } from '@readable/shared/types';

const ADD_BOOKMARK_IN_GOOGLE_EVENTS = gql`
  mutation AddBookmarkInGoogleEvents($addInGoogleEventsInput: AddInGoogleEventsInput!) {
    addBookmarkInGoogleEventsWithAuth(addInGoogleEventsInput: $addInGoogleEventsInput) {
      id
      title
    }
  }
`;

export type SyncBookmarksViewModel = ViewModel<typeof useSyncBookmarks>;

export function useSyncBookmarks() {
  const [addBookmarkInGoogleEventsMutation, { data, loading, error }] = useAddBookmarkInGoogleEventsMutation();

  return {
    addBookmarkInGoogleEventsMutation,
    data,
    loading,
    error,
  };
}

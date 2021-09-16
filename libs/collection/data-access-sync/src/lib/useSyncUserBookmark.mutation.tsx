import { gql } from '@apollo/client';
import { ViewModel } from '@readable/shared/types';
import { useSyncGoogleCalendarWithAuthMutation } from './useSyncUserBookmark.mutation.generated';

const SYNC_USER_BOOKMARK_MUATION = gql`
  mutation SyncGoogleCalendarWithAuth($syncGoogleCalendarWithAuthInput: SyncGoogleCalendarWithAuthInput!) {
    syncGoogleCalendarWithAuth(syncGoogleCalendarWithAuthInput: $syncGoogleCalendarWithAuthInput) {
      isSuccess
    }
  }
`;

export type SyncGoogleCalendarViewModel = ViewModel<typeof useSyncUserBookmark>;

export function useSyncUserBookmark() {
  const [syncGoogleCalendarWithAuthMutation, { data, loading, error }] = useSyncGoogleCalendarWithAuthMutation();

  return {
    syncGoogleCalendarWithAuthMutation,
    data,
    loading,
    error,
  };
}

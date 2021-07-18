import { gql } from '@apollo/client';
import { ViewModel } from '@readable/types/ViewModel';
import { useMeQueryQuery } from './useMeViewModel.query.generated';

const ME_QUERY = gql`
  query MeQuery {
    me: me {
      _id
      name
      provider
      providerId
      avatarUrl
    }
  }
`;

export type MeViewModel = ViewModel<typeof useMeViewModel>;

export function useMeViewModel() {
  const { data, loading, error } = useMeQueryQuery();

  const me = data?.me ?? null;

  return {
    me,
    loading,
    error,
  };
}

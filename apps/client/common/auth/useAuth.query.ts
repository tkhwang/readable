import { gql } from '@apollo/client';
import { ViewModel } from '@readable/types/ViewModel';
import { useMeQuery } from './useAuth.query.generated';

const ME_QUERY = gql`
  query Me {
    me: me {
      _id
      provider
      providerId
      name
      avatarUrl
    }
  }
`;

export type MeViewModel = ViewModel<typeof useMeViewModel>;

export function useMeViewModel() {
  const { data, loading, error } = useMeQuery();

  return {
    me: data?.me ?? null,
    loading,
    error,
  };
}

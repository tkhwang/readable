import { gql } from '@apollo/client';
import { ViewModel } from '@readable/src/types/ViewModel';
import { useMeQuery } from './useAuth.query.generated';

const ME_QUERY = gql`
  query Me {
    me: me {
      id
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

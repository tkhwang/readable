import { gql } from '@apollo/client';
import { useMeQueryQuery } from './useMeViewModel.query.generated';

const ME_QUERY = gql`
  query MeQuery {
    me: me {
      id
      name
      provider
      providerId
      avatarUrl
    }
  }
`;

export function useMeViewModel() {
  const { data, loading, error } = useMeQueryQuery();

  return {
    me: data?.me ?? null,
    loading,
    error,
  };
}

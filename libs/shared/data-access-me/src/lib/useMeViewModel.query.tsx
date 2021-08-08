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

  const me = data?.me ?? null;

  return {
    me,
    loading,
    error,
  };
}

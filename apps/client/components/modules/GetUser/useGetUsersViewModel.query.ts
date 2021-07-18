import { gql } from '@apollo/client';
import { ViewModel } from '@readable/types/ViewModel';
import { useUserFindAllQuery } from './useGetUsersViewModel.query.generated';

const LOAD_USERS = gql`
  query UserFindAll {
    users: users {
      id
      provider
      providerId
      name
    }
  }
`;

export type GetUsersViewModel = ViewModel<typeof useGetUsersViewModel>;

export function useGetUsersViewModel() {
  const { data, loading, error } = useUserFindAllQuery();

  const users = data?.users ?? [];
  return {
    users,
    loading,
    error,
  };
}

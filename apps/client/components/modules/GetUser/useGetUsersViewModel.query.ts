import { gql } from '@apollo/client';
import { ViewModel } from '@readable/types/ViewModel';
import { useUserFindAllQuery } from './useGetUsersViewModel.query.generated';

const LOAD_USERS = gql`
  query UserFindAll {
    userFindAll: userFindAll {
      id
      name
    }
  }
`;

export type GetUsersViewModel = ViewModel<typeof useGetUsersViewModel>;

export function useGetUsersViewModel() {
  const { data, loading, error } = useUserFindAllQuery();

  const users = data?.userFindAll ?? [];
  return {
    users,
    loading,
    error,
  };
}

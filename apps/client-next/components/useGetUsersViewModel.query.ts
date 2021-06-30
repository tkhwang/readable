import { gql, useQuery } from '@apollo/client';
import { ViewModel } from '../core/ViewModel';

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
  // const { data, loading, error } = useUserFindAllQuery();
  const { data, loading, error } = useQuery(LOAD_USERS);

  const users = data?.userFindAll ?? [];
  return {
    users,
    loading,
    error,
  };
}

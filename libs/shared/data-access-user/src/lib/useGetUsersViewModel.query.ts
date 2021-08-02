import { ViewModel } from '@readable/types/ViewModel';
import { useUserFindAllQuery } from './useGetUsersViewModel.query.generated';

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

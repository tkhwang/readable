import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GetUsersViewModel } from './useGetUsersViewModel.query';
import { ViewController } from '../../core/ViewController';

export const GetUsersViewController: ViewController<GetUsersViewModel> = React.memo(
  ({ viewModel }) => {
    const { users, loading, error } = viewModel;

    return (
      <ul>
        {users &&
          users.map((user: any) => {
            return (
              <li key={user.id}>
                {user?.id}:{user?.name}
              </li>
            );
          })}
      </ul>
    );
  }
);

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { ViewController } from '@core/ViewController';
import { GetUsersViewModel } from './useGetUsersViewModel.query';
import { graphQLServer } from '@src/link';

export const GetUsersViewController: ViewController<GetUsersViewModel> = React.memo(({ viewModel }) => {
  const { users, loading, error } = viewModel;

  const env = process.env.NODE_ENV;

  return (
    <div className="m-5">
      <ul>
        <li>NODE_ENV={env}</li>
        <li>graphQLServer={graphQLServer.url}</li>
        <li>
          GraphQL API result=
          {users &&
            users.map((user: any) => {
              return (
                <li key={user.id}>
                  {user?.id}:{user?.name}
                </li>
              );
            })}
        </li>
      </ul>
    </div>
  );
});

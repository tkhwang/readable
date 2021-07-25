import { serverHost } from '@readable/src/config/link';
import { ViewController } from '@readable/src/types/ViewController';
import React from 'react';
import { GetUsersViewModel } from './useGetUsersViewModel.query';

export const GetUsersViewController: ViewController<GetUsersViewModel> = React.memo(({ viewModel }) => {
  const { users, loading, error } = viewModel;

  const env = process.env.NODE_ENV;

  return (
    <div className="m-5">
      <ul>
        <li>NODE_ENV={env}</li>
        <li>graphQLServer={serverHost.graphqlUrl}</li>
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

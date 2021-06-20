import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_USERS } from './Queries';

export function GetUsers() {
  const { data, error, loading } = useQuery(LOAD_USERS);

  const users = data?.userFindAll ?? [];

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

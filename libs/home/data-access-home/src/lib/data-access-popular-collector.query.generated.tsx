import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type UsersHavingManyUserBookmarksOnHomeQueryVariables = Types.Exact<{
  findUsersHavingManyUserBookmarksWithAuthInput: Types.FindUsersHavingManyUserBookmarksWithAuthInput;
}>;


export type UsersHavingManyUserBookmarksOnHomeQuery = (
  { readonly __typename?: 'Query' }
  & { readonly usersHavingManyUserBookmarks: ReadonlyArray<(
    { readonly __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name' | 'provider' | 'providerId' | 'avatarUrl' | 'followersCount' | 'followingsCount' | 'isFollowingUser'>
  )> }
);


export const UsersHavingManyUserBookmarksOnHomeDocument = gql`
    query UsersHavingManyUserBookmarksOnHome($findUsersHavingManyUserBookmarksWithAuthInput: FindUsersHavingManyUserBookmarksWithAuthInput!) {
  usersHavingManyUserBookmarks(
    findUsersHavingManyUserBookmarksWithAuthInput: $findUsersHavingManyUserBookmarksWithAuthInput
  ) {
    id
    name
    provider
    providerId
    avatarUrl
    followersCount
    followingsCount
    isFollowingUser
  }
}
    `;
export type UsersHavingManyUserBookmarksOnHomeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UsersHavingManyUserBookmarksOnHomeQuery, UsersHavingManyUserBookmarksOnHomeQueryVariables>, 'query'> & ({ variables: UsersHavingManyUserBookmarksOnHomeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UsersHavingManyUserBookmarksOnHomeComponent = (props: UsersHavingManyUserBookmarksOnHomeComponentProps) => (
      <ApolloReactComponents.Query<UsersHavingManyUserBookmarksOnHomeQuery, UsersHavingManyUserBookmarksOnHomeQueryVariables> query={UsersHavingManyUserBookmarksOnHomeDocument} {...props} />
    );
    

/**
 * __useUsersHavingManyUserBookmarksOnHomeQuery__
 *
 * To run a query within a React component, call `useUsersHavingManyUserBookmarksOnHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersHavingManyUserBookmarksOnHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersHavingManyUserBookmarksOnHomeQuery({
 *   variables: {
 *      findUsersHavingManyUserBookmarksWithAuthInput: // value for 'findUsersHavingManyUserBookmarksWithAuthInput'
 *   },
 * });
 */
export function useUsersHavingManyUserBookmarksOnHomeQuery(baseOptions: Apollo.QueryHookOptions<UsersHavingManyUserBookmarksOnHomeQuery, UsersHavingManyUserBookmarksOnHomeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersHavingManyUserBookmarksOnHomeQuery, UsersHavingManyUserBookmarksOnHomeQueryVariables>(UsersHavingManyUserBookmarksOnHomeDocument, options);
      }
export function useUsersHavingManyUserBookmarksOnHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersHavingManyUserBookmarksOnHomeQuery, UsersHavingManyUserBookmarksOnHomeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersHavingManyUserBookmarksOnHomeQuery, UsersHavingManyUserBookmarksOnHomeQueryVariables>(UsersHavingManyUserBookmarksOnHomeDocument, options);
        }
export type UsersHavingManyUserBookmarksOnHomeQueryHookResult = ReturnType<typeof useUsersHavingManyUserBookmarksOnHomeQuery>;
export type UsersHavingManyUserBookmarksOnHomeLazyQueryHookResult = ReturnType<typeof useUsersHavingManyUserBookmarksOnHomeLazyQuery>;
export type UsersHavingManyUserBookmarksOnHomeQueryResult = Apollo.QueryResult<UsersHavingManyUserBookmarksOnHomeQuery, UsersHavingManyUserBookmarksOnHomeQueryVariables>;
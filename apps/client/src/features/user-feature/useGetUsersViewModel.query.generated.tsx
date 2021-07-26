import * as Types from '../../types/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type UserFindAllQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UserFindAllQuery = (
  { readonly __typename?: 'Query' }
  & { readonly users: ReadonlyArray<(
    { readonly __typename?: 'User' }
    & Pick<Types.User, 'id' | 'provider' | 'providerId' | 'name'>
  )> }
);


export const UserFindAllDocument = gql`
    query UserFindAll {
  users: users {
    id
    provider
    providerId
    name
  }
}
    `;
export type UserFindAllComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserFindAllQuery, UserFindAllQueryVariables>, 'query'>;

    export const UserFindAllComponent = (props: UserFindAllComponentProps) => (
      <ApolloReactComponents.Query<UserFindAllQuery, UserFindAllQueryVariables> query={UserFindAllDocument} {...props} />
    );
    

/**
 * __useUserFindAllQuery__
 *
 * To run a query within a React component, call `useUserFindAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFindAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFindAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserFindAllQuery(baseOptions?: Apollo.QueryHookOptions<UserFindAllQuery, UserFindAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserFindAllQuery, UserFindAllQueryVariables>(UserFindAllDocument, options);
      }
export function useUserFindAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserFindAllQuery, UserFindAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserFindAllQuery, UserFindAllQueryVariables>(UserFindAllDocument, options);
        }
export type UserFindAllQueryHookResult = ReturnType<typeof useUserFindAllQuery>;
export type UserFindAllLazyQueryHookResult = ReturnType<typeof useUserFindAllLazyQuery>;
export type UserFindAllQueryResult = Apollo.QueryResult<UserFindAllQuery, UserFindAllQueryVariables>;
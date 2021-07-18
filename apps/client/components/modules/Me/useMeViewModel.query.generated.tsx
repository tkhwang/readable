import * as Types from '../../../types/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type MeQueryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MeQueryQuery = (
  { readonly __typename?: 'Query' }
  & { readonly me: (
    { readonly __typename?: 'User' }
    & Pick<Types.User, '_id' | 'name' | 'provider' | 'providerId' | 'avatarUrl'>
  ) }
);


export const MeQueryDocument = gql`
    query MeQuery {
  me: me {
    _id
    name
    provider
    providerId
    avatarUrl
  }
}
    `;
export type MeQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQueryQuery, MeQueryQueryVariables>, 'query'>;

    export const MeQueryComponent = (props: MeQueryComponentProps) => (
      <ApolloReactComponents.Query<MeQueryQuery, MeQueryQueryVariables> query={MeQueryDocument} {...props} />
    );
    

/**
 * __useMeQueryQuery__
 *
 * To run a query within a React component, call `useMeQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQueryQuery(baseOptions?: Apollo.QueryHookOptions<MeQueryQuery, MeQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQueryQuery, MeQueryQueryVariables>(MeQueryDocument, options);
      }
export function useMeQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQueryQuery, MeQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQueryQuery, MeQueryQueryVariables>(MeQueryDocument, options);
        }
export type MeQueryQueryHookResult = ReturnType<typeof useMeQueryQuery>;
export type MeQueryLazyQueryHookResult = ReturnType<typeof useMeQueryLazyQuery>;
export type MeQueryQueryResult = Apollo.QueryResult<MeQueryQuery, MeQueryQueryVariables>;
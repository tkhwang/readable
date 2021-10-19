import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type RecommendUsersOnCollectionQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RecommendUsersOnCollectionQuery = (
  { readonly __typename?: 'Query' }
  & { readonly recommendUsers: ReadonlyArray<(
    { readonly __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name'>
  )> }
);


export const RecommendUsersOnCollectionDocument = gql`
    query RecommendUsersOnCollection {
  recommendUsers {
    id
    name
  }
}
    `;
export type RecommendUsersOnCollectionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RecommendUsersOnCollectionQuery, RecommendUsersOnCollectionQueryVariables>, 'query'>;

    export const RecommendUsersOnCollectionComponent = (props: RecommendUsersOnCollectionComponentProps) => (
      <ApolloReactComponents.Query<RecommendUsersOnCollectionQuery, RecommendUsersOnCollectionQueryVariables> query={RecommendUsersOnCollectionDocument} {...props} />
    );
    

/**
 * __useRecommendUsersOnCollectionQuery__
 *
 * To run a query within a React component, call `useRecommendUsersOnCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecommendUsersOnCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecommendUsersOnCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecommendUsersOnCollectionQuery(baseOptions?: Apollo.QueryHookOptions<RecommendUsersOnCollectionQuery, RecommendUsersOnCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecommendUsersOnCollectionQuery, RecommendUsersOnCollectionQueryVariables>(RecommendUsersOnCollectionDocument, options);
      }
export function useRecommendUsersOnCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecommendUsersOnCollectionQuery, RecommendUsersOnCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecommendUsersOnCollectionQuery, RecommendUsersOnCollectionQueryVariables>(RecommendUsersOnCollectionDocument, options);
        }
export type RecommendUsersOnCollectionQueryHookResult = ReturnType<typeof useRecommendUsersOnCollectionQuery>;
export type RecommendUsersOnCollectionLazyQueryHookResult = ReturnType<typeof useRecommendUsersOnCollectionLazyQuery>;
export type RecommendUsersOnCollectionQueryResult = Apollo.QueryResult<RecommendUsersOnCollectionQuery, RecommendUsersOnCollectionQueryVariables>;
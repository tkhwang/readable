import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type AllUrlInfosBySearchQueryVariables = Types.Exact<{
  searchByTextInAllUrlinfosInput: Types.SearchByTextInAllUrlinfosInput;
}>;


export type AllUrlInfosBySearchQuery = (
  { readonly __typename?: 'Query' }
  & { readonly allUrlInfosBySearch?: Types.Maybe<ReadonlyArray<(
    { readonly __typename?: 'UrlInfo' }
    & Pick<Types.UrlInfo, 'id' | 'url' | 'title' | 'siteName' | 'description'>
  )>> }
);


export const AllUrlInfosBySearchDocument = gql`
    query AllUrlInfosBySearch($searchByTextInAllUrlinfosInput: SearchByTextInAllUrlinfosInput!) {
  allUrlInfosBySearch(
    searchByTextInAllUrlinfosInput: $searchByTextInAllUrlinfosInput
  ) {
    id
    url
    title
    siteName
    description
  }
}
    `;
export type AllUrlInfosBySearchComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllUrlInfosBySearchQuery, AllUrlInfosBySearchQueryVariables>, 'query'> & ({ variables: AllUrlInfosBySearchQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AllUrlInfosBySearchComponent = (props: AllUrlInfosBySearchComponentProps) => (
      <ApolloReactComponents.Query<AllUrlInfosBySearchQuery, AllUrlInfosBySearchQueryVariables> query={AllUrlInfosBySearchDocument} {...props} />
    );
    

/**
 * __useAllUrlInfosBySearchQuery__
 *
 * To run a query within a React component, call `useAllUrlInfosBySearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUrlInfosBySearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUrlInfosBySearchQuery({
 *   variables: {
 *      searchByTextInAllUrlinfosInput: // value for 'searchByTextInAllUrlinfosInput'
 *   },
 * });
 */
export function useAllUrlInfosBySearchQuery(baseOptions: Apollo.QueryHookOptions<AllUrlInfosBySearchQuery, AllUrlInfosBySearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUrlInfosBySearchQuery, AllUrlInfosBySearchQueryVariables>(AllUrlInfosBySearchDocument, options);
      }
export function useAllUrlInfosBySearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUrlInfosBySearchQuery, AllUrlInfosBySearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUrlInfosBySearchQuery, AllUrlInfosBySearchQueryVariables>(AllUrlInfosBySearchDocument, options);
        }
export type AllUrlInfosBySearchQueryHookResult = ReturnType<typeof useAllUrlInfosBySearchQuery>;
export type AllUrlInfosBySearchLazyQueryHookResult = ReturnType<typeof useAllUrlInfosBySearchLazyQuery>;
export type AllUrlInfosBySearchQueryResult = Apollo.QueryResult<AllUrlInfosBySearchQuery, AllUrlInfosBySearchQueryVariables>;
import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type AllUrlInfosBySearchOnSearchQueryVariables = Types.Exact<{
  searchByTextInAllUrlinfosInput: Types.SearchByTextInAllUrlinfosInput;
}>;


export type AllUrlInfosBySearchOnSearchQuery = (
  { readonly __typename?: 'Query' }
  & { readonly allUrlInfosBySearch?: Types.Maybe<ReadonlyArray<(
    { readonly __typename?: 'UrlInfo' }
    & Pick<Types.UrlInfo, 'id' | 'url' | 'title' | 'siteName' | 'description'>
  )>> }
);


export const AllUrlInfosBySearchOnSearchDocument = gql`
    query AllUrlInfosBySearchOnSearch($searchByTextInAllUrlinfosInput: SearchByTextInAllUrlinfosInput!) {
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
export type AllUrlInfosBySearchOnSearchComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllUrlInfosBySearchOnSearchQuery, AllUrlInfosBySearchOnSearchQueryVariables>, 'query'> & ({ variables: AllUrlInfosBySearchOnSearchQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AllUrlInfosBySearchOnSearchComponent = (props: AllUrlInfosBySearchOnSearchComponentProps) => (
      <ApolloReactComponents.Query<AllUrlInfosBySearchOnSearchQuery, AllUrlInfosBySearchOnSearchQueryVariables> query={AllUrlInfosBySearchOnSearchDocument} {...props} />
    );
    

/**
 * __useAllUrlInfosBySearchOnSearchQuery__
 *
 * To run a query within a React component, call `useAllUrlInfosBySearchOnSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUrlInfosBySearchOnSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUrlInfosBySearchOnSearchQuery({
 *   variables: {
 *      searchByTextInAllUrlinfosInput: // value for 'searchByTextInAllUrlinfosInput'
 *   },
 * });
 */
export function useAllUrlInfosBySearchOnSearchQuery(baseOptions: Apollo.QueryHookOptions<AllUrlInfosBySearchOnSearchQuery, AllUrlInfosBySearchOnSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUrlInfosBySearchOnSearchQuery, AllUrlInfosBySearchOnSearchQueryVariables>(AllUrlInfosBySearchOnSearchDocument, options);
      }
export function useAllUrlInfosBySearchOnSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUrlInfosBySearchOnSearchQuery, AllUrlInfosBySearchOnSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUrlInfosBySearchOnSearchQuery, AllUrlInfosBySearchOnSearchQueryVariables>(AllUrlInfosBySearchOnSearchDocument, options);
        }
export type AllUrlInfosBySearchOnSearchQueryHookResult = ReturnType<typeof useAllUrlInfosBySearchOnSearchQuery>;
export type AllUrlInfosBySearchOnSearchLazyQueryHookResult = ReturnType<typeof useAllUrlInfosBySearchOnSearchLazyQuery>;
export type AllUrlInfosBySearchOnSearchQueryResult = Apollo.QueryResult<AllUrlInfosBySearchOnSearchQuery, AllUrlInfosBySearchOnSearchQueryVariables>;
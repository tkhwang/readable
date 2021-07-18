import * as Types from '../../../types/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type GetBookmarksQueryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBookmarksQueryQuery = (
  { readonly __typename?: 'Query' }
  & { readonly bookmarks?: Types.Maybe<ReadonlyArray<(
    { readonly __typename?: 'Bookmark' }
    & Pick<Types.Bookmark, 'url' | 'type' | 'siteName' | 'title' | 'imageUrl' | 'description' | 'tags'>
  )>> }
);


export const GetBookmarksQueryDocument = gql`
    query GetBookmarksQuery {
  bookmarks: bookmarks {
    url
    type
    siteName
    title
    imageUrl
    description
    tags
  }
}
    `;
export type GetBookmarksQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBookmarksQueryQuery, GetBookmarksQueryQueryVariables>, 'query'>;

    export const GetBookmarksQueryComponent = (props: GetBookmarksQueryComponentProps) => (
      <ApolloReactComponents.Query<GetBookmarksQueryQuery, GetBookmarksQueryQueryVariables> query={GetBookmarksQueryDocument} {...props} />
    );
    

/**
 * __useGetBookmarksQueryQuery__
 *
 * To run a query within a React component, call `useGetBookmarksQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookmarksQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookmarksQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBookmarksQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetBookmarksQueryQuery, GetBookmarksQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookmarksQueryQuery, GetBookmarksQueryQueryVariables>(GetBookmarksQueryDocument, options);
      }
export function useGetBookmarksQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookmarksQueryQuery, GetBookmarksQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookmarksQueryQuery, GetBookmarksQueryQueryVariables>(GetBookmarksQueryDocument, options);
        }
export type GetBookmarksQueryQueryHookResult = ReturnType<typeof useGetBookmarksQueryQuery>;
export type GetBookmarksQueryLazyQueryHookResult = ReturnType<typeof useGetBookmarksQueryLazyQuery>;
export type GetBookmarksQueryQueryResult = Apollo.QueryResult<GetBookmarksQueryQuery, GetBookmarksQueryQueryVariables>;
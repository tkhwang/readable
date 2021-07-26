import * as Types from '../../types/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type GetMyBookmarksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMyBookmarksQuery = (
  { readonly __typename?: 'Query' }
  & { readonly myBookmarks: ReadonlyArray<(
    { readonly __typename?: 'Bookmark' }
    & Pick<Types.Bookmark, 'url' | 'type' | 'siteName' | 'title' | 'imageUrl' | 'description' | 'tags'>
  )> }
);

export type GetAnonymousBookmarksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAnonymousBookmarksQuery = (
  { readonly __typename?: 'Query' }
  & { readonly anonymousBookmarks?: Types.Maybe<ReadonlyArray<(
    { readonly __typename?: 'Bookmark' }
    & Pick<Types.Bookmark, 'url' | 'type' | 'siteName' | 'title' | 'imageUrl' | 'description' | 'tags'>
  )>> }
);


export const GetMyBookmarksDocument = gql`
    query GetMyBookmarks {
  myBookmarks: myBookmarks {
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
export type GetMyBookmarksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetMyBookmarksQuery, GetMyBookmarksQueryVariables>, 'query'>;

    export const GetMyBookmarksComponent = (props: GetMyBookmarksComponentProps) => (
      <ApolloReactComponents.Query<GetMyBookmarksQuery, GetMyBookmarksQueryVariables> query={GetMyBookmarksDocument} {...props} />
    );
    

/**
 * __useGetMyBookmarksQuery__
 *
 * To run a query within a React component, call `useGetMyBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyBookmarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyBookmarksQuery(baseOptions?: Apollo.QueryHookOptions<GetMyBookmarksQuery, GetMyBookmarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyBookmarksQuery, GetMyBookmarksQueryVariables>(GetMyBookmarksDocument, options);
      }
export function useGetMyBookmarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyBookmarksQuery, GetMyBookmarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyBookmarksQuery, GetMyBookmarksQueryVariables>(GetMyBookmarksDocument, options);
        }
export type GetMyBookmarksQueryHookResult = ReturnType<typeof useGetMyBookmarksQuery>;
export type GetMyBookmarksLazyQueryHookResult = ReturnType<typeof useGetMyBookmarksLazyQuery>;
export type GetMyBookmarksQueryResult = Apollo.QueryResult<GetMyBookmarksQuery, GetMyBookmarksQueryVariables>;
export const GetAnonymousBookmarksDocument = gql`
    query GetAnonymousBookmarks {
  anonymousBookmarks: anonymousBookmarks {
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
export type GetAnonymousBookmarksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAnonymousBookmarksQuery, GetAnonymousBookmarksQueryVariables>, 'query'>;

    export const GetAnonymousBookmarksComponent = (props: GetAnonymousBookmarksComponentProps) => (
      <ApolloReactComponents.Query<GetAnonymousBookmarksQuery, GetAnonymousBookmarksQueryVariables> query={GetAnonymousBookmarksDocument} {...props} />
    );
    

/**
 * __useGetAnonymousBookmarksQuery__
 *
 * To run a query within a React component, call `useGetAnonymousBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnonymousBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnonymousBookmarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAnonymousBookmarksQuery(baseOptions?: Apollo.QueryHookOptions<GetAnonymousBookmarksQuery, GetAnonymousBookmarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnonymousBookmarksQuery, GetAnonymousBookmarksQueryVariables>(GetAnonymousBookmarksDocument, options);
      }
export function useGetAnonymousBookmarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnonymousBookmarksQuery, GetAnonymousBookmarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnonymousBookmarksQuery, GetAnonymousBookmarksQueryVariables>(GetAnonymousBookmarksDocument, options);
        }
export type GetAnonymousBookmarksQueryHookResult = ReturnType<typeof useGetAnonymousBookmarksQuery>;
export type GetAnonymousBookmarksLazyQueryHookResult = ReturnType<typeof useGetAnonymousBookmarksLazyQuery>;
export type GetAnonymousBookmarksQueryResult = Apollo.QueryResult<GetAnonymousBookmarksQuery, GetAnonymousBookmarksQueryVariables>;
import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type GetMyUserBookmarksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMyUserBookmarksQuery = (
  { readonly __typename?: 'Query' }
  & { readonly myUserBookmarks: ReadonlyArray<(
    { readonly __typename?: 'UserBookmark' }
    & Pick<Types.UserBookmark, 'id' | 'urlHash'>
    & { readonly urlInfo: (
      { readonly __typename?: 'UrlInfo' }
      & Pick<Types.UrlInfo, 'id' | 'url' | 'urlHash' | 'siteName' | 'title' | 'type' | 'description' | 'imageUrl' | 'summary'>
    ), readonly interest: (
      { readonly __typename?: 'Interest' }
      & Pick<Types.Interest, 'id' | 'interest'>
    ), readonly tags: ReadonlyArray<(
      { readonly __typename?: 'Tag' }
      & Pick<Types.Tag, 'id' | 'tag'>
    )> }
  )> }
);


export const GetMyUserBookmarksDocument = gql`
    query GetMyUserBookmarks {
  myUserBookmarks: myUserBookmarks {
    id
    urlHash
    urlInfo {
      id
      url
      urlHash
      siteName
      title
      type
      description
      imageUrl
      summary
    }
    interest {
      id
      interest
    }
    tags {
      id
      tag
    }
  }
}
    `;
export type GetMyUserBookmarksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetMyUserBookmarksQuery, GetMyUserBookmarksQueryVariables>, 'query'>;

    export const GetMyUserBookmarksComponent = (props: GetMyUserBookmarksComponentProps) => (
      <ApolloReactComponents.Query<GetMyUserBookmarksQuery, GetMyUserBookmarksQueryVariables> query={GetMyUserBookmarksDocument} {...props} />
    );
    

/**
 * __useGetMyUserBookmarksQuery__
 *
 * To run a query within a React component, call `useGetMyUserBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyUserBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyUserBookmarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyUserBookmarksQuery(baseOptions?: Apollo.QueryHookOptions<GetMyUserBookmarksQuery, GetMyUserBookmarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyUserBookmarksQuery, GetMyUserBookmarksQueryVariables>(GetMyUserBookmarksDocument, options);
      }
export function useGetMyUserBookmarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyUserBookmarksQuery, GetMyUserBookmarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyUserBookmarksQuery, GetMyUserBookmarksQueryVariables>(GetMyUserBookmarksDocument, options);
        }
export type GetMyUserBookmarksQueryHookResult = ReturnType<typeof useGetMyUserBookmarksQuery>;
export type GetMyUserBookmarksLazyQueryHookResult = ReturnType<typeof useGetMyUserBookmarksLazyQuery>;
export type GetMyUserBookmarksQueryResult = Apollo.QueryResult<GetMyUserBookmarksQuery, GetMyUserBookmarksQueryVariables>;
import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type PaginationUserBookmarksQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars['Int']>;
  after?: Types.Maybe<Types.Scalars['PaginationCursor']>;
}>;


export type PaginationUserBookmarksQuery = (
  { readonly __typename?: 'Query' }
  & { readonly paginationUserBookmarks?: Types.Maybe<(
    { readonly __typename?: 'PaginationUserBookmarks' }
    & { readonly pageInfo: (
      { readonly __typename?: 'PaginationPageInfo' }
      & Pick<Types.PaginationPageInfo, 'hasNextPage' | 'endCursor'>
    ), readonly edges: ReadonlyArray<(
      { readonly __typename?: 'PaginationUserBookmarkEdge' }
      & Pick<Types.PaginationUserBookmarkEdge, 'cursor'>
      & { readonly node: (
        { readonly __typename?: 'UserBookmark' }
        & Pick<Types.UserBookmark, 'id' | 'urlHash' | 'bookmarkersCount' | 'readersCount'>
        & { readonly urlInfo: (
          { readonly __typename?: 'UrlInfo' }
          & Pick<Types.UrlInfo, 'id' | 'url' | 'urlHash' | 'title' | 'siteName' | 'favicon' | 'imageUrl' | 'description'>
        ), readonly interest: (
          { readonly __typename?: 'Interest' }
          & Pick<Types.Interest, 'id' | 'interest'>
        ), readonly tags: ReadonlyArray<(
          { readonly __typename?: 'Tag' }
          & Pick<Types.Tag, 'id' | 'tag'>
        )>, readonly bookmarkers: ReadonlyArray<(
          { readonly __typename?: 'User' }
          & Pick<Types.User, 'id' | 'name' | 'avatarUrl'>
        )>, readonly readers: ReadonlyArray<(
          { readonly __typename?: 'User' }
          & Pick<Types.User, 'id' | 'name' | 'avatarUrl'>
        )> }
      ) }
    )> }
  )> }
);


export const PaginationUserBookmarksDocument = gql`
    query PaginationUserBookmarks($first: Int, $after: PaginationCursor) {
  paginationUserBookmarks(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      cursor
      node {
        id
        urlHash
        urlInfo {
          id
          url
          urlHash
          title
          siteName
          favicon
          imageUrl
          description
        }
        interest {
          id
          interest
        }
        tags {
          id
          tag
        }
        bookmarkersCount
        bookmarkers {
          id
          name
          avatarUrl
        }
        readersCount
        readers {
          id
          name
          avatarUrl
        }
      }
    }
  }
}
    `;
export type PaginationUserBookmarksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PaginationUserBookmarksQuery, PaginationUserBookmarksQueryVariables>, 'query'>;

    export const PaginationUserBookmarksComponent = (props: PaginationUserBookmarksComponentProps) => (
      <ApolloReactComponents.Query<PaginationUserBookmarksQuery, PaginationUserBookmarksQueryVariables> query={PaginationUserBookmarksDocument} {...props} />
    );
    

/**
 * __usePaginationUserBookmarksQuery__
 *
 * To run a query within a React component, call `usePaginationUserBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginationUserBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginationUserBookmarksQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function usePaginationUserBookmarksQuery(baseOptions?: Apollo.QueryHookOptions<PaginationUserBookmarksQuery, PaginationUserBookmarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginationUserBookmarksQuery, PaginationUserBookmarksQueryVariables>(PaginationUserBookmarksDocument, options);
      }
export function usePaginationUserBookmarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginationUserBookmarksQuery, PaginationUserBookmarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginationUserBookmarksQuery, PaginationUserBookmarksQueryVariables>(PaginationUserBookmarksDocument, options);
        }
export type PaginationUserBookmarksQueryHookResult = ReturnType<typeof usePaginationUserBookmarksQuery>;
export type PaginationUserBookmarksLazyQueryHookResult = ReturnType<typeof usePaginationUserBookmarksLazyQuery>;
export type PaginationUserBookmarksQueryResult = Apollo.QueryResult<PaginationUserBookmarksQuery, PaginationUserBookmarksQueryVariables>;
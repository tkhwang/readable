import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type PaginationUserBookmarksOnHomeQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars['Int']>;
  after?: Types.Maybe<Types.Scalars['PaginationCursor']>;
}>;


export type PaginationUserBookmarksOnHomeQuery = (
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
        & Pick<Types.UserBookmark, 'id' | 'bookmarkersCount' | 'readersCount'>
        & { readonly urlInfo: (
          { readonly __typename?: 'UrlInfo' }
          & Pick<Types.UrlInfo, 'id' | 'url' | 'title' | 'siteName' | 'imageUrl' | 'description' | 'favicon'>
        ), readonly interest: (
          { readonly __typename?: 'Interest' }
          & Pick<Types.Interest, 'id' | 'interest'>
        ), readonly tags: ReadonlyArray<(
          { readonly __typename?: 'Tag' }
          & Pick<Types.Tag, 'id' | 'tag'>
        )>, readonly bookmarkers: ReadonlyArray<(
          { readonly __typename?: 'User' }
          & Pick<Types.User, 'id' | 'name' | 'email' | 'avatarUrl'>
        )> }
      ) }
    )> }
  )> }
);


export const PaginationUserBookmarksOnHomeDocument = gql`
    query PaginationUserBookmarksOnHome($first: Int, $after: PaginationCursor) {
  paginationUserBookmarks(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      cursor
      node {
        id
        urlInfo {
          id
          url
          title
          siteName
          imageUrl
          description
          favicon
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
          email
          avatarUrl
        }
        readersCount
      }
    }
  }
}
    `;
export type PaginationUserBookmarksOnHomeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PaginationUserBookmarksOnHomeQuery, PaginationUserBookmarksOnHomeQueryVariables>, 'query'>;

    export const PaginationUserBookmarksOnHomeComponent = (props: PaginationUserBookmarksOnHomeComponentProps) => (
      <ApolloReactComponents.Query<PaginationUserBookmarksOnHomeQuery, PaginationUserBookmarksOnHomeQueryVariables> query={PaginationUserBookmarksOnHomeDocument} {...props} />
    );
    

/**
 * __usePaginationUserBookmarksOnHomeQuery__
 *
 * To run a query within a React component, call `usePaginationUserBookmarksOnHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginationUserBookmarksOnHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginationUserBookmarksOnHomeQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function usePaginationUserBookmarksOnHomeQuery(baseOptions?: Apollo.QueryHookOptions<PaginationUserBookmarksOnHomeQuery, PaginationUserBookmarksOnHomeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginationUserBookmarksOnHomeQuery, PaginationUserBookmarksOnHomeQueryVariables>(PaginationUserBookmarksOnHomeDocument, options);
      }
export function usePaginationUserBookmarksOnHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginationUserBookmarksOnHomeQuery, PaginationUserBookmarksOnHomeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginationUserBookmarksOnHomeQuery, PaginationUserBookmarksOnHomeQueryVariables>(PaginationUserBookmarksOnHomeDocument, options);
        }
export type PaginationUserBookmarksOnHomeQueryHookResult = ReturnType<typeof usePaginationUserBookmarksOnHomeQuery>;
export type PaginationUserBookmarksOnHomeLazyQueryHookResult = ReturnType<typeof usePaginationUserBookmarksOnHomeLazyQuery>;
export type PaginationUserBookmarksOnHomeQueryResult = Apollo.QueryResult<PaginationUserBookmarksOnHomeQuery, PaginationUserBookmarksOnHomeQueryVariables>;
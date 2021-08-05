import * as Types from '../../../../../apps/client/types/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type PaginationBookmarksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PaginationBookmarksQuery = (
  { readonly __typename?: 'Query' }
  & { readonly paginationBookmarks?: Types.Maybe<(
    { readonly __typename?: 'PaginationBookmarks' }
    & { readonly pageInfo: (
      { readonly __typename?: 'PaginationPageInfo' }
      & Pick<Types.PaginationPageInfo, 'hasNextPage' | 'endCursor'>
    ), readonly edges: ReadonlyArray<(
      { readonly __typename?: 'PaginationBookmarkEdge' }
      & Pick<Types.PaginationBookmarkEdge, 'cursor'>
      & { readonly node: (
        { readonly __typename?: 'Bookmark' }
        & Pick<Types.Bookmark, 'id' | 'siteName'>
        & { readonly collector?: Types.Maybe<ReadonlyArray<(
          { readonly __typename?: 'User' }
          & Pick<Types.User, 'id' | 'name' | 'provider'>
        )>> }
      ) }
    )> }
  )> }
);


export const PaginationBookmarksDocument = gql`
    query PaginationBookmarks {
  paginationBookmarks: paginationBookmarks(getPaginationBookmarksInput: {}) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      cursor
      node {
        id
        siteName
        collector {
          id
          name
          provider
        }
      }
    }
  }
}
    `;
export type PaginationBookmarksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PaginationBookmarksQuery, PaginationBookmarksQueryVariables>, 'query'>;

    export const PaginationBookmarksComponent = (props: PaginationBookmarksComponentProps) => (
      <ApolloReactComponents.Query<PaginationBookmarksQuery, PaginationBookmarksQueryVariables> query={PaginationBookmarksDocument} {...props} />
    );
    

/**
 * __usePaginationBookmarksQuery__
 *
 * To run a query within a React component, call `usePaginationBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginationBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginationBookmarksQuery({
 *   variables: {
 *   },
 * });
 */
export function usePaginationBookmarksQuery(baseOptions?: Apollo.QueryHookOptions<PaginationBookmarksQuery, PaginationBookmarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginationBookmarksQuery, PaginationBookmarksQueryVariables>(PaginationBookmarksDocument, options);
      }
export function usePaginationBookmarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginationBookmarksQuery, PaginationBookmarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginationBookmarksQuery, PaginationBookmarksQueryVariables>(PaginationBookmarksDocument, options);
        }
export type PaginationBookmarksQueryHookResult = ReturnType<typeof usePaginationBookmarksQuery>;
export type PaginationBookmarksLazyQueryHookResult = ReturnType<typeof usePaginationBookmarksLazyQuery>;
export type PaginationBookmarksQueryResult = Apollo.QueryResult<PaginationBookmarksQuery, PaginationBookmarksQueryVariables>;
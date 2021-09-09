import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type PaginationBookmarksOnFeedQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars['Int']>;
  after?: Types.Maybe<Types.Scalars['PaginationCursor']>;
}>;


export type PaginationBookmarksOnFeedQuery = (
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
        & Pick<Types.Bookmark, 'id' | 'siteName' | 'title' | 'url' | 'imageUrl' | 'tags' | 'description'>
        & { readonly collectors?: Types.Maybe<ReadonlyArray<(
          { readonly __typename?: 'User' }
          & Pick<Types.User, 'name' | 'avatarUrl'>
        )>>, readonly schedulers?: Types.Maybe<ReadonlyArray<(
          { readonly __typename?: 'User' }
          & Pick<Types.User, 'name' | 'avatarUrl'>
        )>>, readonly finishers?: Types.Maybe<ReadonlyArray<(
          { readonly __typename?: 'User' }
          & Pick<Types.User, 'name' | 'avatarUrl'>
        )>> }
      ) }
    )> }
  )> }
);


export const PaginationBookmarksOnFeedDocument = gql`
    query PaginationBookmarksOnFeed($first: Int, $after: PaginationCursor) {
  paginationBookmarks(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      cursor
      node {
        id
        siteName
        title
        url
        imageUrl
        tags
        description
        collectors {
          name
          avatarUrl
        }
        schedulers {
          name
          avatarUrl
        }
        finishers {
          name
          avatarUrl
        }
      }
    }
  }
}
    `;
export type PaginationBookmarksOnFeedComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PaginationBookmarksOnFeedQuery, PaginationBookmarksOnFeedQueryVariables>, 'query'>;

    export const PaginationBookmarksOnFeedComponent = (props: PaginationBookmarksOnFeedComponentProps) => (
      <ApolloReactComponents.Query<PaginationBookmarksOnFeedQuery, PaginationBookmarksOnFeedQueryVariables> query={PaginationBookmarksOnFeedDocument} {...props} />
    );
    

/**
 * __usePaginationBookmarksOnFeedQuery__
 *
 * To run a query within a React component, call `usePaginationBookmarksOnFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginationBookmarksOnFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginationBookmarksOnFeedQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function usePaginationBookmarksOnFeedQuery(baseOptions?: Apollo.QueryHookOptions<PaginationBookmarksOnFeedQuery, PaginationBookmarksOnFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginationBookmarksOnFeedQuery, PaginationBookmarksOnFeedQueryVariables>(PaginationBookmarksOnFeedDocument, options);
      }
export function usePaginationBookmarksOnFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginationBookmarksOnFeedQuery, PaginationBookmarksOnFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginationBookmarksOnFeedQuery, PaginationBookmarksOnFeedQueryVariables>(PaginationBookmarksOnFeedDocument, options);
        }
export type PaginationBookmarksOnFeedQueryHookResult = ReturnType<typeof usePaginationBookmarksOnFeedQuery>;
export type PaginationBookmarksOnFeedLazyQueryHookResult = ReturnType<typeof usePaginationBookmarksOnFeedLazyQuery>;
export type PaginationBookmarksOnFeedQueryResult = Apollo.QueryResult<PaginationBookmarksOnFeedQuery, PaginationBookmarksOnFeedQueryVariables>;
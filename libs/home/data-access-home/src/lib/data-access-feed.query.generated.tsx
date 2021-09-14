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
        & Pick<Types.UserBookmark, 'id' | 'urlHash'>
        & { readonly urlInfo: (
          { readonly __typename?: 'UrlInfo' }
          & Pick<Types.UrlInfo, 'id' | 'url' | 'urlHash' | 'title' | 'siteName' | 'imageUrl' | 'description'>
        ), readonly interest: (
          { readonly __typename?: 'Interest' }
          & Pick<Types.Interest, 'id' | 'interest'>
        ), readonly tags: ReadonlyArray<(
          { readonly __typename?: 'Tag' }
          & Pick<Types.Tag, 'id' | 'tag'>
        )> }
      ) }
    )> }
  )> }
);


export const PaginationBookmarksOnFeedDocument = gql`
    query PaginationBookmarksOnFeed($first: Int, $after: PaginationCursor) {
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
import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type PaginationUserBookmarksOnFeedQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars['Int']>;
  after?: Types.Maybe<Types.Scalars['PaginationCursor']>;
  tagId?: Types.Maybe<Types.Scalars['String']>;
}>;


export type PaginationUserBookmarksOnFeedQuery = (
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


export const PaginationUserBookmarksOnFeedDocument = gql`
    query PaginationUserBookmarksOnFeed($first: Int, $after: PaginationCursor, $tagId: String) {
  paginationUserBookmarks(
    getPaginationUserBookmarksInput: {first: $first, after: $after, tagId: $tagId}
  ) {
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
export type PaginationUserBookmarksOnFeedComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PaginationUserBookmarksOnFeedQuery, PaginationUserBookmarksOnFeedQueryVariables>, 'query'>;

    export const PaginationUserBookmarksOnFeedComponent = (props: PaginationUserBookmarksOnFeedComponentProps) => (
      <ApolloReactComponents.Query<PaginationUserBookmarksOnFeedQuery, PaginationUserBookmarksOnFeedQueryVariables> query={PaginationUserBookmarksOnFeedDocument} {...props} />
    );
    

/**
 * __usePaginationUserBookmarksOnFeedQuery__
 *
 * To run a query within a React component, call `usePaginationUserBookmarksOnFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginationUserBookmarksOnFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginationUserBookmarksOnFeedQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      tagId: // value for 'tagId'
 *   },
 * });
 */
export function usePaginationUserBookmarksOnFeedQuery(baseOptions?: Apollo.QueryHookOptions<PaginationUserBookmarksOnFeedQuery, PaginationUserBookmarksOnFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginationUserBookmarksOnFeedQuery, PaginationUserBookmarksOnFeedQueryVariables>(PaginationUserBookmarksOnFeedDocument, options);
      }
export function usePaginationUserBookmarksOnFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginationUserBookmarksOnFeedQuery, PaginationUserBookmarksOnFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginationUserBookmarksOnFeedQuery, PaginationUserBookmarksOnFeedQueryVariables>(PaginationUserBookmarksOnFeedDocument, options);
        }
export type PaginationUserBookmarksOnFeedQueryHookResult = ReturnType<typeof usePaginationUserBookmarksOnFeedQuery>;
export type PaginationUserBookmarksOnFeedLazyQueryHookResult = ReturnType<typeof usePaginationUserBookmarksOnFeedLazyQuery>;
export type PaginationUserBookmarksOnFeedQueryResult = Apollo.QueryResult<PaginationUserBookmarksOnFeedQuery, PaginationUserBookmarksOnFeedQueryVariables>;
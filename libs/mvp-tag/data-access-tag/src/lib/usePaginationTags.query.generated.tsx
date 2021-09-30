import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type PaginationTagsQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars['Int']>;
  after?: Types.Maybe<Types.Scalars['PaginationCursor']>;
}>;


export type PaginationTagsQuery = (
  { readonly __typename?: 'Query' }
  & { readonly paginationTags?: Types.Maybe<(
    { readonly __typename?: 'PaginationTags' }
    & { readonly pageInfo: (
      { readonly __typename?: 'PaginationPageInfo' }
      & Pick<Types.PaginationPageInfo, 'hasNextPage' | 'endCursor'>
    ), readonly edges: ReadonlyArray<(
      { readonly __typename?: 'PaginationTagsEdge' }
      & Pick<Types.PaginationTagsEdge, 'cursor'>
      & { readonly node: (
        { readonly __typename?: 'Tag' }
        & Pick<Types.Tag, 'id' | 'tag' | 'normalizedTag' | 'imageUrl' | 'description' | 'followersCount' | 'userBookmarksCount' | 'isFollowingTag'>
      ) }
    )> }
  )> }
);


export const PaginationTagsDocument = gql`
    query PaginationTags($first: Int, $after: PaginationCursor) {
  paginationTags(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      cursor
      node {
        id
        tag
        normalizedTag
        imageUrl
        description
        followersCount
        userBookmarksCount
        isFollowingTag
      }
    }
  }
}
    `;
export type PaginationTagsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PaginationTagsQuery, PaginationTagsQueryVariables>, 'query'>;

    export const PaginationTagsComponent = (props: PaginationTagsComponentProps) => (
      <ApolloReactComponents.Query<PaginationTagsQuery, PaginationTagsQueryVariables> query={PaginationTagsDocument} {...props} />
    );
    

/**
 * __usePaginationTagsQuery__
 *
 * To run a query within a React component, call `usePaginationTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginationTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginationTagsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function usePaginationTagsQuery(baseOptions?: Apollo.QueryHookOptions<PaginationTagsQuery, PaginationTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginationTagsQuery, PaginationTagsQueryVariables>(PaginationTagsDocument, options);
      }
export function usePaginationTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginationTagsQuery, PaginationTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginationTagsQuery, PaginationTagsQueryVariables>(PaginationTagsDocument, options);
        }
export type PaginationTagsQueryHookResult = ReturnType<typeof usePaginationTagsQuery>;
export type PaginationTagsLazyQueryHookResult = ReturnType<typeof usePaginationTagsLazyQuery>;
export type PaginationTagsQueryResult = Apollo.QueryResult<PaginationTagsQuery, PaginationTagsQueryVariables>;
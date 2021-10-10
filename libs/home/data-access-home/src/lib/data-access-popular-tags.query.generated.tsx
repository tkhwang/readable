import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type PopularTagsOnHomeQueryVariables = Types.Exact<{
  findPopularTagsWithAuthInput: Types.FindPopularTagsWithAuthInput;
}>;


export type PopularTagsOnHomeQuery = (
  { readonly __typename?: 'Query' }
  & { readonly popularTags?: Types.Maybe<ReadonlyArray<(
    { readonly __typename?: 'Tag' }
    & Pick<Types.Tag, 'id' | 'tag' | 'normalizedTag' | 'imageUrl' | 'followersCount' | 'userBookmarksCount' | 'isFollowingTag'>
  )>> }
);


export const PopularTagsOnHomeDocument = gql`
    query PopularTagsOnHome($findPopularTagsWithAuthInput: FindPopularTagsWithAuthInput!) {
  popularTags(findPopularTagsWithAuthInput: $findPopularTagsWithAuthInput) {
    id
    tag
    normalizedTag
    imageUrl
    followersCount
    userBookmarksCount
    isFollowingTag
  }
}
    `;
export type PopularTagsOnHomeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PopularTagsOnHomeQuery, PopularTagsOnHomeQueryVariables>, 'query'> & ({ variables: PopularTagsOnHomeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PopularTagsOnHomeComponent = (props: PopularTagsOnHomeComponentProps) => (
      <ApolloReactComponents.Query<PopularTagsOnHomeQuery, PopularTagsOnHomeQueryVariables> query={PopularTagsOnHomeDocument} {...props} />
    );
    

/**
 * __usePopularTagsOnHomeQuery__
 *
 * To run a query within a React component, call `usePopularTagsOnHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularTagsOnHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularTagsOnHomeQuery({
 *   variables: {
 *      findPopularTagsWithAuthInput: // value for 'findPopularTagsWithAuthInput'
 *   },
 * });
 */
export function usePopularTagsOnHomeQuery(baseOptions: Apollo.QueryHookOptions<PopularTagsOnHomeQuery, PopularTagsOnHomeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopularTagsOnHomeQuery, PopularTagsOnHomeQueryVariables>(PopularTagsOnHomeDocument, options);
      }
export function usePopularTagsOnHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularTagsOnHomeQuery, PopularTagsOnHomeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopularTagsOnHomeQuery, PopularTagsOnHomeQueryVariables>(PopularTagsOnHomeDocument, options);
        }
export type PopularTagsOnHomeQueryHookResult = ReturnType<typeof usePopularTagsOnHomeQuery>;
export type PopularTagsOnHomeLazyQueryHookResult = ReturnType<typeof usePopularTagsOnHomeLazyQuery>;
export type PopularTagsOnHomeQueryResult = Apollo.QueryResult<PopularTagsOnHomeQuery, PopularTagsOnHomeQueryVariables>;
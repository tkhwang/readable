import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type MyUserBookmarksGroupedByInterestsOnCollectionQueryVariables = Types.Exact<{
  findMyUserBookmarksGroupedByInterestsInput: Types.FindMyUserBookmarksGroupedByInterestsInput;
}>;


export type MyUserBookmarksGroupedByInterestsOnCollectionQuery = (
  { readonly __typename?: 'Query' }
  & { readonly myUserBookmarksGroupedByInterests: ReadonlyArray<(
    { readonly __typename?: 'FindMyUserBookmarksGroupedByInterestsOutput' }
    & { readonly interest: (
      { readonly __typename?: 'FindMyUserBookmarksGroupedByInterestData' }
      & Pick<Types.FindMyUserBookmarksGroupedByInterestData, 'interestId' | 'interest'>
    ), readonly userBookmarks: ReadonlyArray<(
      { readonly __typename?: 'UserBookmark' }
      & Pick<Types.UserBookmark, 'id'>
      & { readonly urlInfo: (
        { readonly __typename?: 'UrlInfo' }
        & Pick<Types.UrlInfo, 'id' | 'url' | 'title' | 'imageUrl'>
      ) }
    )> }
  )> }
);


export const MyUserBookmarksGroupedByInterestsOnCollectionDocument = gql`
    query MyUserBookmarksGroupedByInterestsOnCollection($findMyUserBookmarksGroupedByInterestsInput: FindMyUserBookmarksGroupedByInterestsInput!) {
  myUserBookmarksGroupedByInterests(
    findMyUserBookmarksGroupedByInterestsInput: $findMyUserBookmarksGroupedByInterestsInput
  ) {
    interest {
      interestId
      interest
    }
    userBookmarks {
      id
      urlInfo {
        id
        url
        title
        imageUrl
      }
    }
  }
}
    `;
export type MyUserBookmarksGroupedByInterestsOnCollectionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MyUserBookmarksGroupedByInterestsOnCollectionQuery, MyUserBookmarksGroupedByInterestsOnCollectionQueryVariables>, 'query'> & ({ variables: MyUserBookmarksGroupedByInterestsOnCollectionQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const MyUserBookmarksGroupedByInterestsOnCollectionComponent = (props: MyUserBookmarksGroupedByInterestsOnCollectionComponentProps) => (
      <ApolloReactComponents.Query<MyUserBookmarksGroupedByInterestsOnCollectionQuery, MyUserBookmarksGroupedByInterestsOnCollectionQueryVariables> query={MyUserBookmarksGroupedByInterestsOnCollectionDocument} {...props} />
    );
    

/**
 * __useMyUserBookmarksGroupedByInterestsOnCollectionQuery__
 *
 * To run a query within a React component, call `useMyUserBookmarksGroupedByInterestsOnCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyUserBookmarksGroupedByInterestsOnCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyUserBookmarksGroupedByInterestsOnCollectionQuery({
 *   variables: {
 *      findMyUserBookmarksGroupedByInterestsInput: // value for 'findMyUserBookmarksGroupedByInterestsInput'
 *   },
 * });
 */
export function useMyUserBookmarksGroupedByInterestsOnCollectionQuery(baseOptions: Apollo.QueryHookOptions<MyUserBookmarksGroupedByInterestsOnCollectionQuery, MyUserBookmarksGroupedByInterestsOnCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyUserBookmarksGroupedByInterestsOnCollectionQuery, MyUserBookmarksGroupedByInterestsOnCollectionQueryVariables>(MyUserBookmarksGroupedByInterestsOnCollectionDocument, options);
      }
export function useMyUserBookmarksGroupedByInterestsOnCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyUserBookmarksGroupedByInterestsOnCollectionQuery, MyUserBookmarksGroupedByInterestsOnCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyUserBookmarksGroupedByInterestsOnCollectionQuery, MyUserBookmarksGroupedByInterestsOnCollectionQueryVariables>(MyUserBookmarksGroupedByInterestsOnCollectionDocument, options);
        }
export type MyUserBookmarksGroupedByInterestsOnCollectionQueryHookResult = ReturnType<typeof useMyUserBookmarksGroupedByInterestsOnCollectionQuery>;
export type MyUserBookmarksGroupedByInterestsOnCollectionLazyQueryHookResult = ReturnType<typeof useMyUserBookmarksGroupedByInterestsOnCollectionLazyQuery>;
export type MyUserBookmarksGroupedByInterestsOnCollectionQueryResult = Apollo.QueryResult<MyUserBookmarksGroupedByInterestsOnCollectionQuery, MyUserBookmarksGroupedByInterestsOnCollectionQueryVariables>;
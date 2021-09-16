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

export type DeleteUserBookmarkWithAuthMutationVariables = Types.Exact<{
  deleteUserBookmarkWithAuthInput: Types.DeleteUserBookmarkWithAuthInput;
}>;


export type DeleteUserBookmarkWithAuthMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly deleteUserBookmarkWithAuth: (
    { readonly __typename?: 'CommonOutput' }
    & Pick<Types.CommonOutput, 'isSuccess'>
  ) }
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
export const DeleteUserBookmarkWithAuthDocument = gql`
    mutation DeleteUserBookmarkWithAuth($deleteUserBookmarkWithAuthInput: DeleteUserBookmarkWithAuthInput!) {
  deleteUserBookmarkWithAuth(
    deleteUserBookmarkWithAuthInput: $deleteUserBookmarkWithAuthInput
  ) {
    isSuccess
  }
}
    `;
export type DeleteUserBookmarkWithAuthMutationFn = Apollo.MutationFunction<DeleteUserBookmarkWithAuthMutation, DeleteUserBookmarkWithAuthMutationVariables>;
export type DeleteUserBookmarkWithAuthComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteUserBookmarkWithAuthMutation, DeleteUserBookmarkWithAuthMutationVariables>, 'mutation'>;

    export const DeleteUserBookmarkWithAuthComponent = (props: DeleteUserBookmarkWithAuthComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteUserBookmarkWithAuthMutation, DeleteUserBookmarkWithAuthMutationVariables> mutation={DeleteUserBookmarkWithAuthDocument} {...props} />
    );
    

/**
 * __useDeleteUserBookmarkWithAuthMutation__
 *
 * To run a mutation, you first call `useDeleteUserBookmarkWithAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserBookmarkWithAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserBookmarkWithAuthMutation, { data, loading, error }] = useDeleteUserBookmarkWithAuthMutation({
 *   variables: {
 *      deleteUserBookmarkWithAuthInput: // value for 'deleteUserBookmarkWithAuthInput'
 *   },
 * });
 */
export function useDeleteUserBookmarkWithAuthMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserBookmarkWithAuthMutation, DeleteUserBookmarkWithAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserBookmarkWithAuthMutation, DeleteUserBookmarkWithAuthMutationVariables>(DeleteUserBookmarkWithAuthDocument, options);
      }
export type DeleteUserBookmarkWithAuthMutationHookResult = ReturnType<typeof useDeleteUserBookmarkWithAuthMutation>;
export type DeleteUserBookmarkWithAuthMutationResult = Apollo.MutationResult<DeleteUserBookmarkWithAuthMutation>;
export type DeleteUserBookmarkWithAuthMutationOptions = Apollo.BaseMutationOptions<DeleteUserBookmarkWithAuthMutation, DeleteUserBookmarkWithAuthMutationVariables>;
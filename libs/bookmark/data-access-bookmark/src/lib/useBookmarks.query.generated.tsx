import * as Types from '../types/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {};
export type GetMyBookmarksQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetMyBookmarksQuery = { readonly __typename?: 'Query' } & {
  readonly myBookmarks: ReadonlyArray<
    { readonly __typename?: 'Bookmark' } & Pick<
      Types.Bookmark,
      | 'id'
      | 'url'
      | 'type'
      | 'siteName'
      | 'title'
      | 'imageUrl'
      | 'description'
      | 'tags'
      | 'countFactful'
      | 'countEmotional'
      | 'countInspirational'
    >
  >;
};

export type DeleteBookmarkWithAuthMutationVariables = Types.Exact<{
  deleteBookmarkWithAuthInput: Types.DeleteBookmarkWithAuthInput;
}>;

export type DeleteBookmarkWithAuthMutation = { readonly __typename?: 'Mutation' } & {
  readonly deleteBookmarkWithAuth: { readonly __typename?: 'CommonOutput' } & Pick<Types.CommonOutput, 'isSuccess'>;
};

export const GetMyBookmarksDocument = gql`
  query GetMyBookmarks {
    myBookmarks: myBookmarks {
      id
      url
      type
      siteName
      title
      imageUrl
      description
      tags
      countFactful
      countEmotional
      countInspirational
    }
  }
`;
export type GetMyBookmarksComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetMyBookmarksQuery, GetMyBookmarksQueryVariables>,
  'query'
>;

export const GetMyBookmarksComponent = (props: GetMyBookmarksComponentProps) => (
  <ApolloReactComponents.Query<GetMyBookmarksQuery, GetMyBookmarksQueryVariables>
    query={GetMyBookmarksDocument}
    {...props}
  />
);

/**
 * __useGetMyBookmarksQuery__
 *
 * To run a query within a React component, call `useGetMyBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyBookmarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyBookmarksQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMyBookmarksQuery, GetMyBookmarksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMyBookmarksQuery, GetMyBookmarksQueryVariables>(GetMyBookmarksDocument, options);
}
export function useGetMyBookmarksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMyBookmarksQuery, GetMyBookmarksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMyBookmarksQuery, GetMyBookmarksQueryVariables>(GetMyBookmarksDocument, options);
}
export type GetMyBookmarksQueryHookResult = ReturnType<typeof useGetMyBookmarksQuery>;
export type GetMyBookmarksLazyQueryHookResult = ReturnType<typeof useGetMyBookmarksLazyQuery>;
export type GetMyBookmarksQueryResult = Apollo.QueryResult<GetMyBookmarksQuery, GetMyBookmarksQueryVariables>;
export const DeleteBookmarkWithAuthDocument = gql`
  mutation DeleteBookmarkWithAuth($deleteBookmarkWithAuthInput: DeleteBookmarkWithAuthInput!) {
    deleteBookmarkWithAuth(deleteBookmarkWithAuthInput: $deleteBookmarkWithAuthInput) {
      isSuccess
    }
  }
`;
export type DeleteBookmarkWithAuthMutationFn = Apollo.MutationFunction<
  DeleteBookmarkWithAuthMutation,
  DeleteBookmarkWithAuthMutationVariables
>;
export type DeleteBookmarkWithAuthComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteBookmarkWithAuthMutation,
    DeleteBookmarkWithAuthMutationVariables
  >,
  'mutation'
>;

export const DeleteBookmarkWithAuthComponent = (props: DeleteBookmarkWithAuthComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteBookmarkWithAuthMutation, DeleteBookmarkWithAuthMutationVariables>
    mutation={DeleteBookmarkWithAuthDocument}
    {...props}
  />
);

/**
 * __useDeleteBookmarkWithAuthMutation__
 *
 * To run a mutation, you first call `useDeleteBookmarkWithAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookmarkWithAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookmarkWithAuthMutation, { data, loading, error }] = useDeleteBookmarkWithAuthMutation({
 *   variables: {
 *      deleteBookmarkWithAuthInput: // value for 'deleteBookmarkWithAuthInput'
 *   },
 * });
 */
export function useDeleteBookmarkWithAuthMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteBookmarkWithAuthMutation, DeleteBookmarkWithAuthMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteBookmarkWithAuthMutation, DeleteBookmarkWithAuthMutationVariables>(
    DeleteBookmarkWithAuthDocument,
    options
  );
}
export type DeleteBookmarkWithAuthMutationHookResult = ReturnType<typeof useDeleteBookmarkWithAuthMutation>;
export type DeleteBookmarkWithAuthMutationResult = Apollo.MutationResult<DeleteBookmarkWithAuthMutation>;
export type DeleteBookmarkWithAuthMutationOptions = Apollo.BaseMutationOptions<
  DeleteBookmarkWithAuthMutation,
  DeleteBookmarkWithAuthMutationVariables
>;

import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type AddBookmarkInGoogleEventsMutationVariables = Types.Exact<{
  addInGoogleEventsInput: Types.AddInGoogleEventsInput;
}>;


export type AddBookmarkInGoogleEventsMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly addBookmarkInGoogleEventsWithAuth: (
    { readonly __typename?: 'Bookmark' }
    & Pick<Types.Bookmark, 'id' | 'title'>
  ) }
);


export const AddBookmarkInGoogleEventsDocument = gql`
    mutation AddBookmarkInGoogleEvents($addInGoogleEventsInput: AddInGoogleEventsInput!) {
  addBookmarkInGoogleEventsWithAuth(
    addInGoogleEventsInput: $addInGoogleEventsInput
  ) {
    id
    title
  }
}
    `;
export type AddBookmarkInGoogleEventsMutationFn = Apollo.MutationFunction<AddBookmarkInGoogleEventsMutation, AddBookmarkInGoogleEventsMutationVariables>;
export type AddBookmarkInGoogleEventsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddBookmarkInGoogleEventsMutation, AddBookmarkInGoogleEventsMutationVariables>, 'mutation'>;

    export const AddBookmarkInGoogleEventsComponent = (props: AddBookmarkInGoogleEventsComponentProps) => (
      <ApolloReactComponents.Mutation<AddBookmarkInGoogleEventsMutation, AddBookmarkInGoogleEventsMutationVariables> mutation={AddBookmarkInGoogleEventsDocument} {...props} />
    );
    

/**
 * __useAddBookmarkInGoogleEventsMutation__
 *
 * To run a mutation, you first call `useAddBookmarkInGoogleEventsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookmarkInGoogleEventsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookmarkInGoogleEventsMutation, { data, loading, error }] = useAddBookmarkInGoogleEventsMutation({
 *   variables: {
 *      addInGoogleEventsInput: // value for 'addInGoogleEventsInput'
 *   },
 * });
 */
export function useAddBookmarkInGoogleEventsMutation(baseOptions?: Apollo.MutationHookOptions<AddBookmarkInGoogleEventsMutation, AddBookmarkInGoogleEventsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBookmarkInGoogleEventsMutation, AddBookmarkInGoogleEventsMutationVariables>(AddBookmarkInGoogleEventsDocument, options);
      }
export type AddBookmarkInGoogleEventsMutationHookResult = ReturnType<typeof useAddBookmarkInGoogleEventsMutation>;
export type AddBookmarkInGoogleEventsMutationResult = Apollo.MutationResult<AddBookmarkInGoogleEventsMutation>;
export type AddBookmarkInGoogleEventsMutationOptions = Apollo.BaseMutationOptions<AddBookmarkInGoogleEventsMutation, AddBookmarkInGoogleEventsMutationVariables>;
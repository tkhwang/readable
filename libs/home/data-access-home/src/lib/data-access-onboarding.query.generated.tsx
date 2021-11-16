import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type SetNickNameOnHomeMutationVariables = Types.Exact<{
  setNickNameInput: Types.SetNickNameInput;
}>;


export type SetNickNameOnHomeMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly setNickName: (
    { readonly __typename?: 'User' }
    & Pick<Types.User, 'nickName'>
  ) }
);


export const SetNickNameOnHomeDocument = gql`
    mutation SetNickNameOnHome($setNickNameInput: SetNickNameInput!) {
  setNickName(setNickNameInput: $setNickNameInput) {
    nickName
  }
}
    `;
export type SetNickNameOnHomeMutationFn = Apollo.MutationFunction<SetNickNameOnHomeMutation, SetNickNameOnHomeMutationVariables>;
export type SetNickNameOnHomeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SetNickNameOnHomeMutation, SetNickNameOnHomeMutationVariables>, 'mutation'>;

    export const SetNickNameOnHomeComponent = (props: SetNickNameOnHomeComponentProps) => (
      <ApolloReactComponents.Mutation<SetNickNameOnHomeMutation, SetNickNameOnHomeMutationVariables> mutation={SetNickNameOnHomeDocument} {...props} />
    );
    

/**
 * __useSetNickNameOnHomeMutation__
 *
 * To run a mutation, you first call `useSetNickNameOnHomeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetNickNameOnHomeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setNickNameOnHomeMutation, { data, loading, error }] = useSetNickNameOnHomeMutation({
 *   variables: {
 *      setNickNameInput: // value for 'setNickNameInput'
 *   },
 * });
 */
export function useSetNickNameOnHomeMutation(baseOptions?: Apollo.MutationHookOptions<SetNickNameOnHomeMutation, SetNickNameOnHomeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetNickNameOnHomeMutation, SetNickNameOnHomeMutationVariables>(SetNickNameOnHomeDocument, options);
      }
export type SetNickNameOnHomeMutationHookResult = ReturnType<typeof useSetNickNameOnHomeMutation>;
export type SetNickNameOnHomeMutationResult = Apollo.MutationResult<SetNickNameOnHomeMutation>;
export type SetNickNameOnHomeMutationOptions = Apollo.BaseMutationOptions<SetNickNameOnHomeMutation, SetNickNameOnHomeMutationVariables>;
import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type FollowTagWithAuthMutationVariables = Types.Exact<{
  followTagWithAuthInput: Types.FollowTagWithAuthInput;
}>;


export type FollowTagWithAuthMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly followTagWithAuth: (
    { readonly __typename?: 'FollowTagWithAuthOutput' }
    & Pick<Types.FollowTagWithAuthOutput, 'isSuccess'>
  ) }
);


export const FollowTagWithAuthDocument = gql`
    mutation FollowTagWithAuth($followTagWithAuthInput: FollowTagWithAuthInput!) {
  followTagWithAuth(followTagWithAuthInput: $followTagWithAuthInput) {
    isSuccess
  }
}
    `;
export type FollowTagWithAuthMutationFn = Apollo.MutationFunction<FollowTagWithAuthMutation, FollowTagWithAuthMutationVariables>;
export type FollowTagWithAuthComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<FollowTagWithAuthMutation, FollowTagWithAuthMutationVariables>, 'mutation'>;

    export const FollowTagWithAuthComponent = (props: FollowTagWithAuthComponentProps) => (
      <ApolloReactComponents.Mutation<FollowTagWithAuthMutation, FollowTagWithAuthMutationVariables> mutation={FollowTagWithAuthDocument} {...props} />
    );
    

/**
 * __useFollowTagWithAuthMutation__
 *
 * To run a mutation, you first call `useFollowTagWithAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowTagWithAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followTagWithAuthMutation, { data, loading, error }] = useFollowTagWithAuthMutation({
 *   variables: {
 *      followTagWithAuthInput: // value for 'followTagWithAuthInput'
 *   },
 * });
 */
export function useFollowTagWithAuthMutation(baseOptions?: Apollo.MutationHookOptions<FollowTagWithAuthMutation, FollowTagWithAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowTagWithAuthMutation, FollowTagWithAuthMutationVariables>(FollowTagWithAuthDocument, options);
      }
export type FollowTagWithAuthMutationHookResult = ReturnType<typeof useFollowTagWithAuthMutation>;
export type FollowTagWithAuthMutationResult = Apollo.MutationResult<FollowTagWithAuthMutation>;
export type FollowTagWithAuthMutationOptions = Apollo.BaseMutationOptions<FollowTagWithAuthMutation, FollowTagWithAuthMutationVariables>;
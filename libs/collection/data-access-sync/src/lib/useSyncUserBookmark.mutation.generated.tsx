import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type SyncGoogleCalendarWithAuthMutationVariables = Types.Exact<{
  syncGoogleCalendarWithAuthInput: Types.SyncGoogleCalendarWithAuthInput;
}>;


export type SyncGoogleCalendarWithAuthMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly syncGoogleCalendarWithAuth: (
    { readonly __typename?: 'CommonOutput' }
    & Pick<Types.CommonOutput, 'isSuccess'>
  ) }
);


export const SyncGoogleCalendarWithAuthDocument = gql`
    mutation SyncGoogleCalendarWithAuth($syncGoogleCalendarWithAuthInput: SyncGoogleCalendarWithAuthInput!) {
  syncGoogleCalendarWithAuth(
    syncGoogleCalendarWithAuthInput: $syncGoogleCalendarWithAuthInput
  ) {
    isSuccess
  }
}
    `;
export type SyncGoogleCalendarWithAuthMutationFn = Apollo.MutationFunction<SyncGoogleCalendarWithAuthMutation, SyncGoogleCalendarWithAuthMutationVariables>;
export type SyncGoogleCalendarWithAuthComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SyncGoogleCalendarWithAuthMutation, SyncGoogleCalendarWithAuthMutationVariables>, 'mutation'>;

    export const SyncGoogleCalendarWithAuthComponent = (props: SyncGoogleCalendarWithAuthComponentProps) => (
      <ApolloReactComponents.Mutation<SyncGoogleCalendarWithAuthMutation, SyncGoogleCalendarWithAuthMutationVariables> mutation={SyncGoogleCalendarWithAuthDocument} {...props} />
    );
    

/**
 * __useSyncGoogleCalendarWithAuthMutation__
 *
 * To run a mutation, you first call `useSyncGoogleCalendarWithAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncGoogleCalendarWithAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncGoogleCalendarWithAuthMutation, { data, loading, error }] = useSyncGoogleCalendarWithAuthMutation({
 *   variables: {
 *      syncGoogleCalendarWithAuthInput: // value for 'syncGoogleCalendarWithAuthInput'
 *   },
 * });
 */
export function useSyncGoogleCalendarWithAuthMutation(baseOptions?: Apollo.MutationHookOptions<SyncGoogleCalendarWithAuthMutation, SyncGoogleCalendarWithAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SyncGoogleCalendarWithAuthMutation, SyncGoogleCalendarWithAuthMutationVariables>(SyncGoogleCalendarWithAuthDocument, options);
      }
export type SyncGoogleCalendarWithAuthMutationHookResult = ReturnType<typeof useSyncGoogleCalendarWithAuthMutation>;
export type SyncGoogleCalendarWithAuthMutationResult = Apollo.MutationResult<SyncGoogleCalendarWithAuthMutation>;
export type SyncGoogleCalendarWithAuthMutationOptions = Apollo.BaseMutationOptions<SyncGoogleCalendarWithAuthMutation, SyncGoogleCalendarWithAuthMutationVariables>;
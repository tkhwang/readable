import gql from 'graphql-tag';
import { useFollowTagWithAuthMutation } from './useFollowTag.mutation.generated';

const FOLLOW_TAG_MUTATION = gql`
  mutation FollowTagWithAuth($followTagWithAuthInput: FollowTagWithAuthInput!) {
    followTagWithAuth(followTagWithAuthInput: $followTagWithAuthInput) {
      isSuccess
    }
  }
`;

export function useFollowTag() {
  const [followTagWithAuthMutation, { data, loading, error }] = useFollowTagWithAuthMutation();

  return {
    followTagWithAuthMutation,
  };
}

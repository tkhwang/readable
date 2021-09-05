import { gql } from '@apollo/client';
import { useMeQuery } from './useMe.query.generated';

const graphql = gql`
  query Me {
    me {
      id
      name
      provider
      providerId
      avatarUrl
    }
  }
`;

export function useMe() {
  const { data: meData, loading: isMeDataLoading, error: isMeDataError } = useMeQuery();

  return {
    me: meData?.me,
    isMeDataLoading,
    isMeDataError,
  };
}

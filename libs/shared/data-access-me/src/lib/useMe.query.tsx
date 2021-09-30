import { gql } from '@apollo/client';
import { useMeQuery } from './useMe.query.generated';
import { useRouter } from 'next/router';

const graphql = gql`
  query Me {
    me {
      id
      name
      provider
      providerId
      avatarUrl
      tags {
        id
        tag
      }
    }
  }
`;

type useMeType = {
  redirectTo: string;
};

export function useMe({ redirectTo }: useMeType) {
  const { data: meData, loading: isMeDataLoading, error: isMeDataError } = useMeQuery({
    fetchPolicy: 'cache-and-network',
  });

  const router = useRouter();

  if (isMeDataError) {
    router.push(redirectTo);
  }

  return {
    me: meData?.me,
    isMeDataLoading,
  };
}

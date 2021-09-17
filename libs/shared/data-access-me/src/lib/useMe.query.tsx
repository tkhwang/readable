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
    }
  }
`;

type useMeProps = {
  redirectTo?: string;
};

export function useMe({ redirectTo }: useMeProps) {
  const { data: meData, loading: isMeDataLoading, error: isMeDataError } = useMeQuery();

  const router = useRouter();

  if (isMeDataError) {
    router.push(redirectTo ?? '/login');
  }

  return {
    me: meData?.me,
    isMeDataLoading,
  };
}

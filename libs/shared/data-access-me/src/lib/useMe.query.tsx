import { gql, WatchQueryFetchPolicy } from '@apollo/client';
import { useMeQuery } from './useMe.query.generated';
import { useRouter } from 'next/router';
import { DEFAULT_PROFILE_IMAGE_URL } from '@readable/shared/util-common';

const graphql = gql`
  query Me {
    me {
      id
      name
      nickName
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
  fetchPolicy?: WatchQueryFetchPolicy;
};

export function useMe({ redirectTo, fetchPolicy }: useMeType) {
  const { data: meData, loading: isMeDataLoading, error: isMeDataError } = useMeQuery({
    fetchPolicy: fetchPolicy,
  });

  const router = useRouter();

  if (isMeDataError) {
    router.push(redirectTo);
  }

  if (meData && !meData?.me.nickName) {
    router.push('/login/welcome');
  }

  return {
    me: { ...meData?.me, avatarUrl: meData?.me.avatarUrl || DEFAULT_PROFILE_IMAGE_URL },
    isMeDataLoading,
  };
}

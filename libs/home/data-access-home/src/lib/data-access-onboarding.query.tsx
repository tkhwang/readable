import { gql } from '@apollo/client';
import router from 'next/router';
import { useSetNickNameOnHomeMutation } from './data-access-onboarding.query.generated';

gql`
  mutation SetNickNameOnHome($setNickNameInput: SetNickNameInput!) {
    setNickName(setNickNameInput: $setNickNameInput) {
      nickName
    }
  }
`;

export function useDataAccessOnboarding() {
  const [updateNickName, { loading: isUpdateNickNameLoading }] = useSetNickNameOnHomeMutation();

  const setNickName = async (nickName: string) => {
    //   에러 처리 필요
    await updateNickName({ variables: { setNickNameInput: { nickName } } });
    router.push(`/${nickName}`);
  };

  return { setNickName, isUpdateNickNameLoading };
}

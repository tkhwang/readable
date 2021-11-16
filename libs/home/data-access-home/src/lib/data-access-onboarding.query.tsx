import { gql } from '@apollo/client';
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
    updateNickName({ variables: { setNickNameInput: { nickName } } });
  };

  return { setNickName, isUpdateNickNameLoading };
}

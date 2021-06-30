import { GetUsersViewController } from '@components/GetUsersViewController';
import { useGetUsersViewModel } from '@components/useGetUsersViewModel.query';
import withApollo from '@lib/withApollo';
import React from 'react';
import styled from 'styled-components';
import { getDataFromTree } from '@apollo/client/react/ssr';

const StyledPage = styled.div`
  .page {
  }
`;

export function Home() {
  const viewModel = useGetUsersViewModel();

  return (
    <>
      <div className="text-xl font-medium text-red-400">client-next: next.js app in nx with nest.js</div>
      아래가 제대로 보여야 함 (GraphQL API 동작)
      <GetUsersViewController viewModel={viewModel} />
      <img
        src="https://user-images.githubusercontent.com/365500/122947722-572c6280-d3b5-11eb-9b18-f8e0e2f79e3b.png"
        alt="symbol"
        style={{ width: '100%' }}
      />
    </>
  );
}

// export default Index;
export default withApollo(Home, { getDataFromTree });

import { Layout } from '@readable/components/layout';
import withApollo from '@readable/lib/withApollo';
import React from 'react';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { HomeComp } from '@readable/components/modules/HomeComp';

function Home() {
  return <Layout main={<HomeComp />} />;
}

export default Home;
// export default withApollo(Home, { getDataFromTree });

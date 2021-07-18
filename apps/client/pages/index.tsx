import { Layout } from '@readable/components/layout';
import withApollo from '@readable/lib/withApollo';
import React from 'react';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { Home } from '@readable/components/modules/Home';

function Index() {
  return <Layout main={<Home />} />;
}

export default Index;

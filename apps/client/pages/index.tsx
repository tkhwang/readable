import React from 'react';
import { getDataFromTree } from '@apollo/client/react/ssr';
import withApollo from '@readable/lib/withApollo';
import DemoPage from '@readable/components/templates/DemoPage';

export function Home() {
  return <DemoPage></DemoPage>;
}

export default withApollo(Home, { getDataFromTree });

import { Layout } from '@readable/components/layout';
import withApollo from '@readable/lib/withApollo';
import React from 'react';
import { getDataFromTree } from '@apollo/client/react/ssr';

function Home() {
  return <Layout main={<>Home</>} />;
}

// export default Home;
export default withApollo(Home, { getDataFromTree });

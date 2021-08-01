import React from 'react';
import { Layout } from '@client/components/layout';
import { Home } from '@client/components/modules/Home';

function Index() {
  return <Layout main={<Home />} />;
}

export default Index;

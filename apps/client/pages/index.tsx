import React from 'react';
import { FeatureHome } from '@readable/home/feature-home';
import { useMe } from '@readable/shared/data-access-me';

function Home() {
  const { me, isMeDataLoading } = useMe({ redirectTo: '/login' });

  if (!me || isMeDataLoading) {
    return <div>loading...</div>;
  }

  return <FeatureHome></FeatureHome>;
}

export default Home;

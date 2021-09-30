import React from 'react';
import { FeatureHome } from '@readable/home/feature-home';
import { useMe } from '@readable/shared/data-access-me';
import { Loading } from '@readable/ui';

function Home() {
  const { me, isMeDataLoading } = useMe({ redirectTo: '/login', fetchPolicy: 'network-only' });

  if (!me || isMeDataLoading) {
    return (
      <div className="border-2 h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return <FeatureHome></FeatureHome>;
}

export default Home;

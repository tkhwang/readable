import React from 'react';
import { FeatureHome } from '@readable/home/feature-home';
import { useMe } from '@readable/shared/data-access-me';
import { Loading } from '@readable/ui';
import Head from 'next/head';

function Home() {
  const { me, isMeDataLoading } = useMe({ redirectTo: '/login', fetchPolicy: 'network-only' });

  if (!me || isMeDataLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Readable</title>
      </Head>

      <FeatureHome />
    </>
  );
}

export default Home;

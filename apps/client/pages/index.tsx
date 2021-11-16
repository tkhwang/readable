import React from 'react';
import { FeatureHome } from '@readable/home/feature-home';
import { useMe } from '@readable/shared/data-access-me';
import { Loading } from '@readable/ui';
import { FeatureOnboarding } from '@readable/home/feature-onboarding';
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

  if (me.nickName) {
    return (
      <>
        <Head>
          <title>Readable</title>
        </Head>

        <FeatureHome />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Readable Onboarding</title>
      </Head>
      <body className="h-screen bg-indigo-700">
        <FeatureOnboarding />
      </body>
    </>
  );
}

export default Home;

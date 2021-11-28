import React from 'react';
import Head from 'next/head';
import { FeatureOnboarding } from '@readable/login/feature-login';

function Welcome() {
  return (
    <>
      <Head>
        <title>Readable Onboarding</title>
      </Head>
      <body className="h-screen bg-customIndigo">
        <FeatureOnboarding />
      </body>
    </>
  );
}

export default Welcome;

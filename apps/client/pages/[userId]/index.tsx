import React from 'react';
import { useRouter } from 'next/router';
import { FeatureCollection } from '@readable/collection/feature-collection';

function Home() {
  const router = useRouter();
  const { userId } = router.query;
  console.log('TCL: Home -> userId', userId);

  return <FeatureCollection></FeatureCollection>;
}

export default Home;

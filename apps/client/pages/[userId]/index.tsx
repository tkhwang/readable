import React from 'react';
import { useRouter } from 'next/router';
import { FeatureCollection } from '@readable/collection/feature-collection';
import { useMe } from '@readable/shared/data-access-me';
import { Loading } from '@readable/ui';

function Home() {
  const router = useRouter();
  const { userId } = router.query;

  const { me, isMeDataLoading } = useMe({ redirectTo: '/login', fetchPolicy: 'network-only' });

  if (!me || isMeDataLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return <FeatureCollection userId={userId as string} />;
}

export default Home;

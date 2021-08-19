import React from 'react';
import { FeatureHome } from '@readable/home/feature-home';
import { AuthRoute } from '@readable/shared/data-access-auth';

function Index() {
  return (
    <AuthRoute redirectPath={'/welcome'}>
      <FeatureHome></FeatureHome>
    </AuthRoute>
  );
}

export default Index;

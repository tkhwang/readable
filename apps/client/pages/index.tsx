import React from 'react';
import { HomePage } from '@readable/home/feature-home';
import { AuthRoute } from '@readable/shared/data-access-auth';

function Index() {
  return (
    <AuthRoute redirectPath={'/welcome'}>
      <HomePage></HomePage>
    </AuthRoute>
  );
}

export default Index;

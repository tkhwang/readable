import React from 'react';
import { HomePage } from '@readable/home/feature-home';
import { ComingSoonPage } from '@readable/home/feature-coming-soon';
import { useAuth } from '@readable/shared/data-access-auth';

function Index() {
  const { authenticated, logout } = useAuth();

  return <div>{authenticated ? <HomePage /> : <ComingSoonPage />}</div>;
}

export default Index;

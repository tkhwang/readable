import React from 'react';
import { useAuth } from '@readable/src/features/common-feature';
import { WelcomeHome } from '@readable/src/features/welcome-feature';
import { Me } from '@readable/src/features/me-feature';

const Index = () => {
  const { authenticated, logout } = useAuth();

  return <>{authenticated ? <Me /> : <WelcomeHome />}</>;
};

export default Index;

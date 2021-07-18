import { useMeViewModel } from '@readable/common/auth/useAuth.query';
import React from 'react';
import { MeViewController } from '../Me/MeViewController';

export function HomeComp() {
  const viewModel = useMeViewModel();

  return <MeViewController viewModel={viewModel} />;
}

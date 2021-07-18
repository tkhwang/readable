import React from 'react';
import { MeViewController } from './MeViewController';
import { useMeViewModel } from './useMeViewModel.query';

export function Me() {
  const viewModel = useMeViewModel();

  return <MeViewController viewModel={viewModel} />;
}

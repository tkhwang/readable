import React from 'react';
import { Profile, ProfileProps } from './profile';

export default {
  component: Profile,
  title: 'Profile',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ProfileProps = {};

  return <Profile />;
};

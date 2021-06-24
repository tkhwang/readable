import React from 'react';
import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: 'Button',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ButtonProps = {};

  return <Button />;
};

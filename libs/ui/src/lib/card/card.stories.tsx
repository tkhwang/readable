import React from 'react';
import { Card, CardProps } from './card';

export default {
  component: Card,
  title: 'Card',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: CardProps = {};

  return <Card />;
};

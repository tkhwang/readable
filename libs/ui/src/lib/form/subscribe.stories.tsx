import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Subscribe, SubscribeProps } from './subscribe';

export default {
  title: 'Form/Subscribe',
  component: Subscribe,
} as Meta;

const Template: Story<SubscribeProps> = args => <Subscribe {...args} />;

export const Default = Template.bind({});

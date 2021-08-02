import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Subscribe, SubscribeProps } from './subscribe';

export default {
  title: 'Components/Subscribe',
  component: Subscribe,
} as Meta;

const Template: Story<SubscribeProps> = args => <Subscribe {...args} />;

export const Default = Template.bind({});
// Primary.args = { background: '#ff0', label: 'Button' };

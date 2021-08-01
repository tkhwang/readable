import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Header, HeaderProps } from './header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Default = Template.bind({});

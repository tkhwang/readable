import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Profile, ProfileProps } from './profile';

export default {
  title: 'Profile',
  component: Profile,
} as Meta;

const Template: Story<ProfileProps> = args => <Profile {...args} />;

export const Default = Template.bind({});

Default.args = {
  provider: 'provider',
  name: 'name',
  avatarUrl: 'https://user-images.githubusercontent.com/68647194/123543522-e8228580-d789-11eb-8cb6-433b29a9d469.jpeg',
};

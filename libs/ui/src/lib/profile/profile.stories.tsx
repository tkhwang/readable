import { Meta, Story } from '@storybook/react';
import { Profile, ProfileProps } from './profile';
import dotPattern from '../../../.storybook/assets/dot_pattern.svg';

export default {
  title: 'Profile/Profile',
  component: Profile,
} as Meta;

const Template: Story<ProfileProps> = args => <Profile {...args} />;

export const Default = Template.bind({});

Default.args = {
  backgroundImageUrl: dotPattern,
};

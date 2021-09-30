import { Meta, Story } from '@storybook/react';
import { Profile, ProfileProps } from './profile';

export default {
  title: 'Profile',
  component: Profile,
} as Meta;

const Template: Story<ProfileProps> = args => <Profile {...args} />;

export const Default = Template.bind({});

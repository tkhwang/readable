import { Meta, Story } from '@storybook/react';
import { ProfileHeader, ProfileHeaderProps } from './header-profile';

export default {
  title: 'Header/ProfileHeader',
  component: ProfileHeader,
} as Meta;

const Template: Story<ProfileHeaderProps> = args => <ProfileHeader {...args} />;
export const Default = Template.bind({});

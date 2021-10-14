import { Meta, Story } from '@storybook/react';
import { ResponsiveHeader, ResponsiveHeaderProps } from './responsive-header';
import profileImage from '../.././../assets/avatar_default.svg';
import { AvatarIcon } from '../avatar/avatar-icon';

export default {
  title: 'Header/ResponsiveHeader',
  component: ResponsiveHeader,
} as Meta;

const Template: Story<ResponsiveHeaderProps> = args => <ResponsiveHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  renderProfileDropdown: () => <AvatarIcon profileImage={profileImage} />,
  children: ({ onClose }) => <div></div>,
};

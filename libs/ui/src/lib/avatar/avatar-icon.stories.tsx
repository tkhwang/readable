import { Meta, Story } from '@storybook/react';
import { AvatarIcon, AvatarIconProps } from './avatar-icon';
import profileImage from '../../../.storybook/assets/avatar_default.svg';

export default {
  title: 'Avatar/AvatarIcon',
  component: AvatarIcon,
} as Meta;

const Template: Story<AvatarIconProps> = args => <AvatarIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  profileImage,
};

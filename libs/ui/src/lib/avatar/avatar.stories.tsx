import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';
import profileImage from '../.././../.storybook/assets/avatar_default.svg';

export default {
  title: 'Avatar/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  profileImage,
  userInfo: {
    nickname: '20min',
    description:
      'Defining and informing the complex field of user experience (UX) through frequent publication of high-quality articles for experts and newcomers alike.',
  },
  direction: 'row',
  size: 'lg',
};

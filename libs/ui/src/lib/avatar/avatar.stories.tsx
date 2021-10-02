import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';
import profileImage from '../.././../assets/avatar_default.svg';

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
    job: 'designer',
  },
  direction: 'row',
};

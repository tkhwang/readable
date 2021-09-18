import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';
import profileImage from '../.././../assets/Fernando_Pidrilio.svg';

export default {
  title: 'Elements/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  profileImage,
};

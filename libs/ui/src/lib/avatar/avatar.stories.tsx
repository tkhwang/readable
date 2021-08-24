import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';

export default {
  title: 'Elements/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Default = Template.bind({});

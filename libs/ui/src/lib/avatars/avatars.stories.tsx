import { Meta, Story } from '@storybook/react';
import { Avatars, AvatarsProps } from './avatars';

export default {
  title: 'Elements/Avatars',
  component: Avatars,
} as Meta;

const Template: Story<AvatarsProps> = args => <Avatars {...args} />;

export const Default = Template.bind({});

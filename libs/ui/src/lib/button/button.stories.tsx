import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './button';

export default {
  title: 'Button/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.parameters = { backgrounds: { default: 'light' } };

Default.args = {
  children: 'follow',
  active: false,
};

export const Active = Template.bind({});
Active.parameters = { backgrounds: { default: 'light' } };

Active.args = {
  children: 'following',
  isActive: true,
};

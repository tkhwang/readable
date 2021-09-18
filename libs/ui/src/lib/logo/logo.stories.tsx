import { Meta, Story } from '@storybook/react';
import { Logo, LogoProps } from './logo';

export default {
  title: 'Elements/Logo',
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = args => <Logo {...args} />;

export const Default = Template.bind({});

import { Meta, Story } from '@storybook/react';
import { Nav, NavProps } from './nav';

export default {
  title: 'Components/Nav',
  component: Nav,
} as Meta;

const Template: Story<NavProps> = args => <Nav {...args} />;

export const Default = Template.bind({});

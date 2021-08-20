import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from './card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;
export const Default = Template.bind({});

import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from './card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;
export const Default = Template.bind({});

Default.args = {
  imageUrl: 'https://user-images.githubusercontent.com/68647194/125168170-056e3f80-e1df-11eb-8af8-de5395e38480.JPG',
};

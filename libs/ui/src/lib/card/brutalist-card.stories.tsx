import { Meta, Story } from '@storybook/react';
import { BrutalistCard, BrutalistCardProps } from './brutalist-card';

export default {
  title: 'Card/BrutalistCard',
  component: BrutalistCard,
} as Meta;

const Template: Story<BrutalistCardProps> = args => <BrutalistCard {...args} />;

export const Default = Template.bind({});

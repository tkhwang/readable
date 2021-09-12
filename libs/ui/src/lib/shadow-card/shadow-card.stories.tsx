import { Meta, Story } from '@storybook/react';
import { ShadowCard, ShadowCardProps } from './shadow-card';

export default {
  title: 'Card/shadowCard',
  component: ShadowCard,
} as Meta;

const Template: Story<ShadowCardProps> = args => <ShadowCard {...args} />;

export const Default = Template.bind({});

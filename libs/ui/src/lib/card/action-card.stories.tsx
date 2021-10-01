import { Meta, Story } from '@storybook/react';
import { ActionCard, ActionCardProps } from './action-card';

export default {
  title: 'Card/ActionCard',
  component: ActionCard,
} as Meta;

const Template: Story<ActionCardProps> = args => <ActionCard {...args} />;

export const Default = Template.bind({});

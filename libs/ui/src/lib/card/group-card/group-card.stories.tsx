import { Meta, Story } from '@storybook/react';
import { GroupCard, GroupCardProps } from './group-card';

export default {
  title: 'Card/GroupCard',
  component: GroupCard,
} as Meta;

const Template: Story<GroupCardProps> = args => <GroupCard {...args} />;

export const Default = Template.bind({});

Default.parameters = { backgrounds: { default: 'dark' } };

import { Meta, Story } from '@storybook/react';
import { CommentCard, CommentCardProps } from './comment-card';

export default {
  title: 'Card/CommentCard',
  component: CommentCard,
} as Meta;

const Template: Story<CommentCardProps> = args => <CommentCard {...args} />;

export const Default = Template.bind({});

import { Meta, Story } from '@storybook/react';
import { FeedHeader, FeedHeaderProps } from './feed-header';

export default {
  title: 'Header/FeedHeader',
  component: FeedHeader,
} as Meta;

const Template: Story<FeedHeaderProps> = args => <FeedHeader {...args} />;
export const Default = Template.bind({});

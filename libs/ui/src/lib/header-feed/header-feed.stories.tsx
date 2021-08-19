import { Meta, Story } from '@storybook/react';
import { HeaderFeed, HeaderFeedProps } from './header-feed';

export default {
  title: 'Header/HeaderFeed',
  component: HeaderFeed,
} as Meta;

const Template: Story<HeaderFeedProps> = args => <HeaderFeed {...args} />;
export const Default = Template.bind({});

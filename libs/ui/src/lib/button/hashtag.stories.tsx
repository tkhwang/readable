import { Meta, Story } from '@storybook/react';
import { Hashtag, HashtagProps } from './hashtag';

export default {
  title: 'Button/Hashtag',
  component: Hashtag,
} as Meta;

const Template: Story<HashtagProps> = args => <Hashtag {...args} />;

export const Default = Template.bind({});

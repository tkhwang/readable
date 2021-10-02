import { Meta, Story } from '@storybook/react';
import { Hashtags, HashtagsProps } from './hashtags';

export default {
  title: 'Hashtag/Hashtags',
  component: Hashtags,
} as Meta;

const Template: Story<HashtagsProps> = args => <Hashtags {...args} />;

export const Default = Template.bind({});

Default.args = {
  hashtagNames: [
    { key: '1', name: 'ux' },
    { key: '2', name: 'react' },
    { key: '3', name: 'food' },
    { key: '4', name: 'design' },
    { key: '5', name: 'design' },
    { key: '6', name: 'movie' },
    { key: '7', name: 'dev' },
  ],
};

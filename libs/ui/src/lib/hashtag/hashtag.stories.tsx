import { Meta, Story } from '@storybook/react';
import { Hashtag, HashtagProps } from './hashtag';

export default {
  title: 'Hashtag/Hashtag',
  component: Hashtag,
} as Meta;

const Template: Story<HashtagProps> = args => <Hashtag {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  backgrounds: { default: 'dark' },
};

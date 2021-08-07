import { Meta, Story } from '@storybook/react';
import { Ad, AdProps } from './ad';

export default {
  title: 'Components/Ad',
  component: Ad,
} as Meta;

const Template: Story<AdProps> = args => <Ad {...args} />;

export const Default = Template.bind({});

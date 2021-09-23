import { Meta, Story } from '@storybook/react';
import { Loading, LoadingProps } from './loading';

export default {
  title: 'Loading/Loading',
  component: Loading,
} as Meta;

const Template: Story<LoadingProps> = args => <Loading {...args} />;

export const Default = Template.bind({});

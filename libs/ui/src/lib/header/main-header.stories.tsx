import { Meta, Story } from '@storybook/react';
import { MainHeader, MainHeaderProps } from './main-header';

export default {
  title: 'Header/MainHeader',
  component: MainHeader,
} as Meta;

const Template: Story<MainHeaderProps> = args => <MainHeader {...args} />;

export const Default = Template.bind({});

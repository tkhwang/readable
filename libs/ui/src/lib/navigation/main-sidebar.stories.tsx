import { Meta, Story } from '@storybook/react';
import { MainSidebar, MainSidebarProps } from './main-sidebar';

export default {
  title: 'Navigation/MainSidebar',
  component: MainSidebar,
} as Meta;

const Template: Story<MainSidebarProps> = args => <MainSidebar {...args} />;

export const Default = Template.bind({});

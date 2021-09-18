import { Meta, Story } from '@storybook/react';
import { MenuItemButton, MenuItemButtonProps } from './menu-item-button';

export default {
  title: 'MenuItemButton',
  component: MenuItemButton,
} as Meta;

const Template: Story<MenuItemButtonProps> = args => <MenuItemButton {...args} />;

export const Default = Template.bind({});

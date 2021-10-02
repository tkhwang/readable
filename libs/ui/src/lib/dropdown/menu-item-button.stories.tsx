import { BanIcon, EyeIcon } from '@heroicons/react/solid';
import { Meta, Story } from '@storybook/react';
import { MenuItemButton, MenuItemButtonProps } from './menu-item-button';

export default {
  title: 'Dropdown/MenuItemButton',
  component: MenuItemButton,
} as Meta;

const Template: Story<MenuItemButtonProps> = args => <MenuItemButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  renderActiveIcon: () => <BanIcon className="w-5 h-5" />,
  renderIcon: () => <EyeIcon className="w-5 h-5" />,
};

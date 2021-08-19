import { Meta, Story } from '@storybook/react';
import { NavigationMenu, NavigationMenuProps } from './navigation-menu';

export default {
  title: 'Navigation/NavigationMenu',
  component: NavigationMenu,
} as Meta;

const Template: Story<NavigationMenuProps> = args => <NavigationMenu {...args} />;

export const Default = Template.bind({});

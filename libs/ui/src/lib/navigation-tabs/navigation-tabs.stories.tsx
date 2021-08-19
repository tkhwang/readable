import { Meta, Story } from '@storybook/react';
import { NavigationTabs, NavigationTabsProps } from './navigation-tabs';

export default {
  title: 'Navigation/NavigationTabs',
  component: NavigationTabs,
} as Meta;

const Template: Story<NavigationTabsProps> = args => <NavigationTabs {...args} />;
export const Default = Template.bind({});

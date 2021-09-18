import { Meta, Story } from '@storybook/react';
import { NavigationTabs, NavigationTabsProps } from './navigation-tabs';

export default {
  title: 'Navigation/NavigationTabs',
  component: NavigationTabs,
} as Meta;

const Template: Story<NavigationTabsProps> = args => <NavigationTabs {...args} />;

export const Border = Template.bind({});

Border.parameters = {
  nextRouter: {
    path: '/',
  },
};

Border.args = {
  tabs: [
    { href: '/', tabName: 'Overview' },
    { href: '/', tabName: 'Collections' },
    { href: '/', tabName: 'Schedule' },
  ],
};

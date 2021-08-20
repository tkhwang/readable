import { Meta, Story } from '@storybook/react';
import { NavigationHeader, NavigationHeaderProps } from './header-navigation';

export default {
  title: 'Header/NavigationHeader',
  component: NavigationHeader,
} as Meta;

const Template: Story<NavigationHeaderProps> = args => <NavigationHeader {...args} />;
export const Default = Template.bind({});

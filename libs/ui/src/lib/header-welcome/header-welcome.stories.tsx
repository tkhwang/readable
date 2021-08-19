import { Meta, Story } from '@storybook/react';
import { HeaderWelcome, HeaderWelcomeProps } from './header-welcome';

export default {
  title: 'Header/HeaderWelcome',
  component: HeaderWelcome,
} as Meta;

const Template: Story<HeaderWelcomeProps> = args => <HeaderWelcome {...args} />;
export const Default = Template.bind({});

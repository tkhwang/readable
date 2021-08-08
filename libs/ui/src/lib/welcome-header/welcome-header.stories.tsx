import { Meta, Story } from '@storybook/react';
import { WelcomeHeader, WelcomeHeaderProps } from './welcome-header';

export default {
  title: 'Header/WelcomeHeader',
  component: WelcomeHeader,
} as Meta;

const Template: Story<WelcomeHeaderProps> = args => <WelcomeHeader {...args} />;
export const Default = Template.bind({});

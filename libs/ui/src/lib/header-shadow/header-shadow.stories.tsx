import { Meta, Story } from '@storybook/react';
import { ShadowHeader, ShadowHeaderProps } from './header-shadow';

export default {
  title: 'Header/ShadowHeader',
  component: ShadowHeader,
} as Meta;

const Template: Story<ShadowHeaderProps> = args => <ShadowHeader {...args} />;
export const Default = Template.bind({});

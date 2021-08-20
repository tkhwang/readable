import { Meta, Story } from '@storybook/react';
import { BasicHeader, BasicHeaderProps } from './header-basic';

export default {
  title: 'Header/BasicHeader',
  component: BasicHeader,
} as Meta;

const Template: Story<BasicHeaderProps> = args => <BasicHeader {...args} />;
export const Default = Template.bind({});

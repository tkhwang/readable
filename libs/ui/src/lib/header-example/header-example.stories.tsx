import { Meta, Story } from '@storybook/react';
import { HeaderExample, HeaderExampleProps } from './header-example';

export default {
  title: 'Header/HeaderExample',
  component: HeaderExample,
} as Meta;

const Template: Story<HeaderExampleProps> = args => <HeaderExample {...args} />;
export const Default = Template.bind({});

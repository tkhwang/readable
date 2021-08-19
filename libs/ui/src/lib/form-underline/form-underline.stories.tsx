import { Meta, Story } from '@storybook/react';
import { FormUnderline, FormUnderlineProps } from './form-underline';

export default {
  title: 'Form/FormUnderline',
  component: FormUnderline,
} as Meta;

const Template: Story<FormUnderlineProps> = args => <FormUnderline {...args} />;
export const Default = Template.bind({});

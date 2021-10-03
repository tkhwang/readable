import { Meta, Story } from '@storybook/react';
import { FormWithUnderline, FormWithUnderlineProps } from './form-with-underline';

export default {
  title: 'Form/FormWithUnderline',
  component: FormWithUnderline,
} as Meta;

const Template: Story<FormWithUnderlineProps> = args => <FormWithUnderline {...args} />;

export const Default = Template.bind({});

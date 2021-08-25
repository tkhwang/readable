import { Meta, Story } from '@storybook/react';
import { UnderlineForm, UnderlineFormProps } from './form-underline';

export default {
  title: 'Form/UnderlineForm',
  component: UnderlineForm,
} as Meta;

const Template: Story<UnderlineFormProps> = args => <UnderlineForm {...args} />;
export const Default = Template.bind({});

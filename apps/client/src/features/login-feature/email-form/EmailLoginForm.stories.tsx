import React from 'react';
import { EmailLoginForm } from './EmailLoginForm';

export default {
  component: EmailLoginForm,
  title: 'login/EmailLoginForm',
};

const Template = args => <EmailLoginForm {...args} />;

export const Default = Template.bind({});

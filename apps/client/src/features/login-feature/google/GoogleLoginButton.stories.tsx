import React from 'react';
import { GoogleLoginButton } from './GoogleLoginButton';

export default {
  component: GoogleLoginButton,
  title: 'login/GoogleLoginButton',
};

const Template = args => <GoogleLoginButton {...args} />;

export const Default = Template.bind({});

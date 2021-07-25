import React from 'react';
import { SocialLoginForm } from './SocialLoginForm';

export default {
  component: SocialLoginForm,
  title: 'login/SocialLoginForm',
};

const Template = args => <SocialLoginForm {...args} />;

export const Default = Template.bind({});

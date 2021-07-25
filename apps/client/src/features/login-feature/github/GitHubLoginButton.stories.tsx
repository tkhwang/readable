import React from 'react';
import { GitHubLoginButton } from './GitHubLoginButton';

export default {
  component: GitHubLoginButton,
  title: 'login/GitHubLoginButton',
};

const Template = args => <GitHubLoginButton {...args} />;

export const Default = Template.bind({});

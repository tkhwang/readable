import { SocialLoginButton } from '@readable/components/elements/SocialLoginButton';
import { Layout } from '@readable/components/layout';
import { LoginComp } from '@readable/components/modules/Login';
import React from 'react';

function Login() {
  return <Layout main={<LoginComp />} />;
}

export default Login;

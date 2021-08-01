import { SocialLoginButton } from '@client/components/elements/SocialLoginButton';
import { Layout } from '@client/components/layout';
import { LoginComp } from '@client/components/modules/Login';
import React from 'react';

function Login() {
  return <Layout main={<LoginComp />} />;
}

export default Login;

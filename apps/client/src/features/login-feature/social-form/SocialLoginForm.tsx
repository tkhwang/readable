import { serverHost } from '@readable/src/config/link';
import React from 'react';
import { FacebookLoginButton, TwitterLoginButton } from 'react-social-login-buttons';
import { GitHubLoginButton } from '../github';
import { GoogleLoginButton } from '../google';

export const SocialLoginForm = () => {
  return (
    <form>
      <GitHubLoginButton />
      <GoogleLoginButton />
      {/* <a href={`${serverHost.restUrl}/auth/facebook`}>
        <FacebookLoginButton />
      </a>
      <a href={`${serverHost.restUrl}/auth/twitter`}>
        <TwitterLoginButton />
      </a> */}
    </form>
  );
};

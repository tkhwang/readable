import { serverHost } from '@readable/src/config/link';
import React from 'react';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  TwitterLoginButton,
} from 'react-social-login-buttons';

interface Props {
  provider: string;
}

export function SocialLoginButton({ provider }: Props) {
  if (provider === 'google') {
    return (
      <a href={`${serverHost.restUrl}/auth/google`}>
        <GoogleLoginButton />
      </a>
    );
  }

  if (provider === 'facebook') {
    return (
      <a href={`${serverHost.restUrl}/auth/facebook`}>
        <FacebookLoginButton />
      </a>
    );
  }

  if (provider === 'github') {
    return (
      <a href={`${serverHost.restUrl}/auth/github`}>
        <GithubLoginButton />
      </a>
    );
  }

  if (provider === 'twitter') {
    return (
      <a href={`${serverHost.restUrl}/auth/twitter`}>
        <TwitterLoginButton />
      </a>
    );
  }

  return null;
}

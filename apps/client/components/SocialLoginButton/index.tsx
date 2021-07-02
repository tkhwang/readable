import { ViewController } from '@readable/core/ViewController';
import React from 'react';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import axios from 'axios';
import { links } from '@readable/link';

interface Props {
  provider: string;
}

export function SocialLoginButton({ provider }: Props) {
  if (provider === 'google') {
    return (
      <a href={`${links.restUrl}/auth/google`}>
        <GoogleLoginButton />
      </a>
    );
  }

  if (provider === 'facebook') {
    return (
      <a href={`${links.restUrl}/auth/facebook`}>
        <FacebookLoginButton />
      </a>
    );
  }

  return null;
}

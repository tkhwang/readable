import { ViewController } from '@readable/core/ViewController';
import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import axios from 'axios';
import { links } from '@readable/link';

export function LoginGoogle() {
  return (
    <a href={`${links.restUrl}/rest/auth/google`} target="_blank" rel="noreferrer">
      <GoogleLoginButton />
    </a>
  );
}

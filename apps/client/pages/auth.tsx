import { JWT_TOKEN } from '@readable/common/constants';
import { Router, useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { globalToken, globalIsLoggedIn } from './_app';

function Auth() {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token) {
      localStorage.setItem(JWT_TOKEN, token as string);
      globalToken(token as string);
      globalIsLoggedIn(true);
    }

    router.push('/');
  }, [router, token]);

  return null;
}

export default Auth;

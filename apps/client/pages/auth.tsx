import { loadAuthToken, setAuthToken } from '@readable/common/auth';
import { JWT_TOKEN } from '@readable/common/constants';
import { Router, useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { globalToken, globalIsLoggedIn } from './_app';

function Auth() {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token && typeof token === 'string') {
      setAuthToken(JWT_TOKEN, token);
    }

    router.push('/');
  }, [router, token]);

  return null;
}

export default Auth;

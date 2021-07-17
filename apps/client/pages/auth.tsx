import { setAuthToken } from '@readable/common/auth/auth';
import { useAuth } from '@readable/common/auth/useAuth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function Auth() {
  const { setAuthenticated } = useAuth();
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token && typeof token === 'string') {
      setAuthToken(token);
      setAuthenticated(true);
    }

    router.push('/');
  }, [router, token, setAuthenticated]);

  return null;
}

export default Auth;

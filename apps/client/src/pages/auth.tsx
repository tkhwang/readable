import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth, setAuthToken } from '@readable/src/features/common-feature';

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

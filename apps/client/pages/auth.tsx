import { setAuthToken } from '@readable/common/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function Auth() {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token && typeof token === 'string') {
      setAuthToken(token);
    }

    router.push('/');
  }, [router, token]);

  return null;
}

export default Auth;

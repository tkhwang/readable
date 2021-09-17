import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { setAuthToken } from '@readable/shared/util-auth';

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

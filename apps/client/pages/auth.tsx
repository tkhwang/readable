import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '@readable/shared/data-access-auth';
import { setAuthToken } from '@readable/shared/util-auth';

function Auth() {
  const router = useRouter();
  const { token } = router.query;

  const { setAuthenticated } = useAuth();

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

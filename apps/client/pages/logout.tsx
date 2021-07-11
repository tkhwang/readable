import { JWT_TOKEN } from '@readable/common/constants';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { globalToken, globalIsLoggedIn } from '@readable/pages/_app';
import { clearAuthToken } from '@readable/common/auth';

function Logout() {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    clearAuthToken(JWT_TOKEN);

    router.push('/');
  }, [router, token]);

  return null;
}

export default Logout;

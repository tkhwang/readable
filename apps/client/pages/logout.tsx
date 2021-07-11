import { JWT_TOKEN } from '@readable/common/constants';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { globalToken, globalIsLoggedIn } from '@readable/pages/_app';

function Logout() {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    localStorage.removeItem(JWT_TOKEN);
    globalToken('');
    globalIsLoggedIn(false);

    router.push('/');
  }, [router, token]);

  return null;
}

export default Logout;

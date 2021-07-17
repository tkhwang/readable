import React, { useEffect } from 'react';
import { getDataFromTree } from '@apollo/client/react/ssr';
import withApollo from '@readable/lib/withApollo';
import DemoPage from '@readable/components/templates/DemoPage';
import { JWT_TOKEN } from '@readable/common/constants';
import { globalIsLoggedIn, globalToken } from '@readable/pages/_app';
import { useRouter } from 'next/router';

export function About() {
  const router = useRouter();

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem(JWT_TOKEN);

    globalToken(tokenFromLocalStorage);
    globalIsLoggedIn(Boolean(tokenFromLocalStorage));

    if (!globalIsLoggedIn()) router.push('/login');
  }, []);

  return <DemoPage />;
}

// export default withApollo(Home, { getDataFromTree });
export default About;

import { AppProps } from 'next/app';
import { makeVar } from '@apollo/client';

import 'tailwindcss/tailwind.css';
import '@readable/styles/styles.css';
import '@readable/styles/style.scss';
import { JWT_TOKEN } from '@readable/common/constants';
import { useEffect } from 'react';

export const globalToken = makeVar<string>('');
export const globalIsLoggedIn = makeVar<boolean>(false);

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const token = localStorage.getItem(JWT_TOKEN);
    console.log('🛂 token = ', token);

    globalToken(token);
    globalIsLoggedIn(Boolean(token));
  });

  return <Component {...pageProps} />;
}

export default CustomApp;

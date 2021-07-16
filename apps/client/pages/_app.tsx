import { AppProps } from 'next/app';
import { makeVar } from '@apollo/client';
import 'tailwindcss/tailwind.css';
import '@readable/styles/styles.css';
import '@readable/styles/style.scss';
import { JWT_TOKEN } from '@readable/common/constants';
import { loadAuthToken } from '@readable/common/auth';

export const globalToken = makeVar<string>('');
export const globalIsLoggedIn = makeVar<boolean>(false);

function CustomApp({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    loadAuthToken(JWT_TOKEN);
  }

  return <Component {...pageProps} />;
}

export default CustomApp;

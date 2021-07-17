import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '@readable/styles/styles.css';
import '@readable/styles/style.scss';
import { AuthProvider } from '@readable/common/auth/useAuth';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>Readable</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default CustomApp;

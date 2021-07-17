import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '@readable/styles/styles.css';
import '@readable/styles/style.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Readable</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;

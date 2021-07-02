import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import 'tailwindcss/tailwind.css';
import '../css/style.scss';

import AOS from 'aos';
import { useEffect } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });
  // return <Component {...pageProps} />;
  return (
    <Head>
      <title>Welcome to Readable</title>
    </Head>
  );
}

export default CustomApp;

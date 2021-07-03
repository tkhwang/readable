import { AppProps } from 'next/app';

import '../css/global.css';
import '../css/global.scss';
import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default CustomApp;

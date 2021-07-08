import { AppProps } from 'next/app';

import './styles.css';
import 'tailwindcss/tailwind.css';
import '../styles/style.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default CustomApp;

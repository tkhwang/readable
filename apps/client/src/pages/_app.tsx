import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '@readable/src/styles/styles.css';
import '@readable/src/styles/style.scss';
import { AuthProvider } from '@readable/src/features/common-feature';
import { useApollo } from '@readable/src/features/common-feature';
import { ApolloProvider } from '@apollo/client';

function CustomApp({ Component, pageProps }: AppProps) {
  const client = useApollo();

  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Head>
          <title>Readable</title>
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthProvider>
  );
}

export default CustomApp;

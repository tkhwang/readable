import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '@readable/styles/styles.css';
import '@readable/styles/style.scss';
import { AuthProvider } from '@readable/common/auth/useAuth';
import { useApollo } from '@readable/common/apollo';
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

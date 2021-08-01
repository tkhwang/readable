import { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@client/common/apollo';
import 'tailwindcss/tailwind.css';
import '@client/styles/styles.css';
import '@client/styles/style.scss';
import { AuthProvider } from '@client/common/auth/useAuth';

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

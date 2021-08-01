import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@readable/shared/data-access-apollo';
import { AuthProvider } from '@readable/shared/data-access-auth';

import 'tailwindcss/tailwind.css';
import '@client/styles/styles.css';
import '@client/styles/style.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default CustomApp;

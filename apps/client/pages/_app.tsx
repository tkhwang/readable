import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@readable/shared/data-access-apollo';
import { AuthProvider } from '@readable/shared/data-access-auth';

import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const client = useApollo();

  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthProvider>
  );
}

export default CustomApp;

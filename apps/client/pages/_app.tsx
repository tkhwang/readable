import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@readable/shared/util-apollo';

import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default CustomApp;

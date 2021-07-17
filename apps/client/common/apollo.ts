import { ApolloClient, ApolloProvider, DefaultOptions, HttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { useMemo } from 'react';
import { serverHost } from './link';

function createApolloCLient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: serverHost.graphqlUrl,
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
}

export function useApollo() {
  const client = useMemo(() => createApolloCLient(), []);
  return client;
}

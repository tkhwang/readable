import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
  makeVar,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useMemo } from 'react';
import { loadAuthToken } from './auth/auth';
import { useAuth } from './auth/useAuth';
import { serverHost } from './link';

function createApolloCLient(authToken: string | null) {
  console.log('TCL: createApolloCLient -> authToken', authToken);

  const httpLink = createHttpLink({
    uri: serverHost.graphqlUrl,
    credentials: 'same-origin',
  });

  const authLink = setContext((_, { headers }) => {
    const baseHeaders = { ...headers };

    const token = loadAuthToken();
    console.log('TCL: authLink -> token', token);

    if (token) {
      baseHeaders.authorization = `Bearer ${token}`;
    }

    return {
      headers: {
        ...baseHeaders,
      },
    };
  });

  return new ApolloClient({
    // link: new HttpLink({}),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
}

export function useApollo() {
  const { authToken } = useAuth();
  const client = useMemo(() => createApolloCLient(authToken), [authToken]);

  return client;
}

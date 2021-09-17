import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useMemo } from 'react';
import { loadAuthToken } from '@readable/shared/util-auth';
import { serverHost } from '@readable/shared/util-common';
import { relayStylePagination } from '@apollo/client/utilities';

function createApolloClient() {
  const httpLink = createHttpLink({
    uri: serverHost.graphqlUrl,
    credentials: 'same-origin',
  });

  const authLink = setContext((_, { headers }) => {
    const baseHeaders = { ...headers };

    const token = loadAuthToken();
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
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            paginationBookmarks: relayStylePagination(),
            paginationUserBookmarks: relayStylePagination(),
          },
        },
      },
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
}

export function useApollo() {
  const client = useMemo(() => createApolloClient(), []);

  return client;
}

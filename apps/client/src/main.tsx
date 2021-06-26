import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => alert(`Graphql error ${message}`));
  }
});

const port = process.env.NODE_ENV === 'production' ? 80 : 7000;

const link = from([
  errorLink,
  new HttpLink({
    uri: `http://localhost:${port}/graphql`,
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
);

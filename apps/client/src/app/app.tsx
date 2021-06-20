import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { GetUsers } from './components/GetUsers';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      alert(`Graphql error ${message}`)
    );
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: 'http://localhost:7000/graphql',
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export function App() {
  return (
    <ApolloProvider client={client}>
      Readable, coming soon...
      <GetUsers />
    </ApolloProvider>
  );
}

export default App;

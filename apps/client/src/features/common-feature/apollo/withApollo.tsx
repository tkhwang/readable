import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { useRouter } from 'next/router';
import nextWithApollo from 'next-with-apollo';
import { serverHost } from '@readable/src/config/link';

/**
 * deprecate
 */

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link: new HttpLink({
        uri: serverHost.graphqlUrl,
      }),
      headers: {
        ...(headers as Record<string, string>),
      },
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      );
    },
  }
);

export default withApollo;

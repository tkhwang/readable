import { ApolloClient, ApolloProvider, DefaultOptions, HttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { useRouter } from 'next/router';
import nextWithApollo from 'next-with-apollo';
import { serverHost } from '@readable/common/link';
import { globalIsLoggedIn, globalToken } from '@readable/pages/_app';
import { JWT_TOKEN } from '@readable/common/constants';

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    let token = null;

    if (typeof window !== 'undefined') {
      token = localStorage.getItem(JWT_TOKEN);
      console.log('TCL: token', token);
    }

    return new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link: new HttpLink({
        uri: serverHost.graphqlUrl,
      }),
      headers: {
        ...(headers as Record<string, string>),
        Authorization: token ? `Authorization: Bearer ${token}` : '',
      },
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              isLoggedIn: {
                read() {
                  return globalIsLoggedIn();
                },
              },
              token: {
                read() {
                  return globalToken();
                },
              },
            },
          },
        },
      }).restore(initialState || {}),
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

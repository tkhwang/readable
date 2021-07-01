function getGraphQLServerUrl() {
  const env = process.env.NODE_ENV;
  console.log('🔧 @client : NODE_ENV = ', env);

  if (env === 'production') return 'https://readable-2021.herokuapp.com/graphql';

  return 'http://localhost:7000/graphql';
}

export const graphQLServer = {
  url: getGraphQLServerUrl(),
};

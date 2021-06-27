function getGraphQLServerUrl() {
  const env = process.env.NODE_ENV;
  console.log('🔧 @client : NODE_ENV = ', env);

  const deployServer = process.env.DEPLOY_SERVER;
  console.log('🔧 @client : deployServer = ', deployServer);

  if (env === 'production') return 'https://readable-2021.herokuapp.com';

  return 'http://localhost';
}

export const graphQLServer = {
  url: getGraphQLServerUrl(),
};

function getServerUrl() {
  const env = process.env.NODE_ENV;
  console.log('🔧 @client : NODE_ENV = ', env);

  if (env === 'production') return 'https://readable-2021.herokuapp.com';

  return 'http://localhost:7000';
}

export const links = {
  url: getServerUrl(),
  graphqlUrl: `${getServerUrl()}/graphql`,
};

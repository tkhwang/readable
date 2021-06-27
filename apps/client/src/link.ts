function getGraphQLServerUrl() {
  const deployServer = process.env.DEPLOY_SERVER;

  if (deployServer === 'heroku') return 'https://readable-2021.herokuapp.com';

  if (deployServer === 'netlify') return 'https://readable-2021.netlify.app';

  return 'http://localhost';
}

export const graphQLServer = {
  url: getGraphQLServerUrl(),
};

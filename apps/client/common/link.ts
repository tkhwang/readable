const env = process.env.NODE_ENV;
console.log('🔧 @client : NODE_ENV = ', env);

const serverHostUrl =
  process.env.NODE_ENV === 'production' ? 'https://readable-2021.herokuapp.com' : 'http://localhost:7000';

export const serverHost = {
  restUrl: `${serverHostUrl}/rest`,
  graphqlUrl: `${serverHostUrl}/graphql`,
};

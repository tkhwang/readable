const env = process.env.NODE_ENV;
console.log('🔧 @client : NODE_ENV = ', env);

export const serverHost = {
  restUrl: `${process.env.SERVER_HOST}/rest`,
  graphqlUrl: `${process.env.SERVER_HOST}/graphql`,
};

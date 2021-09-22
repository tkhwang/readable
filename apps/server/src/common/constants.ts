export const endpoints = {
  nlp: {
    text: `${process.env.NLP_HOST}/text`,
    url: `${process.env.NLP_HOST}/url`,
  },
};

export const oauthGoogleCredentials = JSON.parse(process.env.OAUTH_GOOGLE_CREDENTIALS ?? '');

export const awsCredentials = {
  ELASTICSEARCH: {
    REGION: process.env.AWS_REGION || '',
    ENDPOINT: process.env.AWS_ELASTICSEARCH_ENDPOINT || '',
    ACCESS_KEY: process.env.AWS_ELASTICSEARCH_ACCESS_KEY || '',
    SECRET_KEY: process.env.AWS_ELASTICSEARCH_SECRET_KEY || '',
  },
};

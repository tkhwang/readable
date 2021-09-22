export const endpoints = {
  nlp: {
    text: `${process.env.NLP_HOST}/text`,
    url: `${process.env.NLP_HOST}/url`,
  },
};

export const oauthGoogleCredentials = JSON.parse(process.env.OAUTH_GOOGLE_CREDENTIALS ?? '');

export const awsCredentials = {
  ELASTICSEARCH: {
    ENDPOINT: process.env.AWS_ELASTICSEARCH_ENDPOINT || '',
    BASIC_AUTH_TOKEN:
      `${process.env.AWS_ELASTICSEARCH_BASIC_AUTH_ID}:${process.env.AWS_ELASTICSEARCH_BASIC_AUTH_PW}` || '',
  },
};

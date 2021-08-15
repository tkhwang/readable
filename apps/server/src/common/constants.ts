export const endpoints = {
  nlp: {
    text: `${process.env.NLP_HOST}/text`,
    url: `${process.env.NLP_HOST}/url`,
  },
};

export const oauthGoogleCredentials = JSON.parse(process.env.OAUTH_GOOGLE_CREDENTIALS ?? '');

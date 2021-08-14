export const endpoints = {
  nlp: {
    text: `${process.env.NLP_HOST}/text`,
    url: `${process.env.NLP_HOST}/url`,
  },
};

export const googleCalendarServiceCredentials = JSON.parse(process.env.GOOGLE_CALENDAR_SERVICE_CREDENTIALS ?? '');

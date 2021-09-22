import { awsCredentials } from '@readable/common/constants';
import * as elasticsearch from '@elastic/elasticsearch';
import { createConnector } from 'aws-elasticsearch-js';

const getCreds = cb => {
  // load creds from somewhere...
  const credentials = {
    accessKeyId: awsCredentials.ELASTICSEARCH.ACCESS_KEY,
    secretAccessKey: awsCredentials.ELASTICSEARCH.SECRET_KEY,
  };
  const err = null; // if you give an error, the request will abort
  cb(err, credentials);
};

export class SearchService {
  private readonly esClient;

  constructor() {
    this.esClient = new elasticsearch.Client({
      nodes: [awsCredentials.ELASTICSEARCH.ENDPOINT],
      // Connection: createConnector({ region: awsCredentials.ELASTICSEARCH.REGION, getCreds }),
      Connection: createConnector({ region: awsCredentials.ELASTICSEARCH.REGION }),
    });
  }

  async index() {
    await this.esClient.index({
      index: 'urlinfo',
      body: {
        url: 'https://dev.to/caiobraga/next-js-conf-special-edition-what-s-new-in-next-js-2b4k',
        title: `Next.js Conf – Special Edition - What's new in next.js?`,
        description:
          'The Next conference, which took place on the 15th of the 6th of 2020, was based on the UX User...',
      },
    });
  }

  async search() {
    return this.esClient.search({
      index: 'urlInfo',
      body: {
        query: {
          match: { hello: 'world' },
        },
      },
    });
  }

  async indexDocument() {
    await this.esClient.indices.create({
      index: 'urlInfo',
      body: {
        mappings: {
          urlInfo: {
            properties: {
              url: { type: 'text', index: 'not_analyzed' },
              title: { type: 'text', index: 'not_analyzed' },
              description: { type: 'text', index: 'not_analyzed' },
            },
          },
        },
      },
    });
  }
}

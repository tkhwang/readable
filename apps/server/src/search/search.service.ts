import { awsCredentials } from '@readable/common/constants';
import axios from 'axios';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';

export class SearchService {
  // MEMO(Teddy): It shoudl use @elasticsearch/elasticsearch-js#7.x official client.
  // But use axios client due to the auth problem.
  private readonly esClient = axios.create({
    baseURL: awsCredentials.ELASTICSEARCH.ENDPOINT,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + Buffer.from(awsCredentials.ELASTICSEARCH.BASIC_AUTH_TOKEN).toString('base64'),
    },
  });

  private readonly URLINFO_INDEX = 'urlinfo';

  async get() {
    return this.esClient.get('/urlinfo');
  }

  async indexDocument(urlInfo: UrlInfo) {
    const { id, url, title, siteName, description } = urlInfo;
    const elasticsearchDocument = { url, title, siteName, description };

    return this.esClient.put(`${this.URLINFO_INDEX}/_doc/${id}`, elasticsearchDocument);
  }

  async getDocument(id: string) {
    return this.esClient.get(`${this.URLINFO_INDEX}/_doc/${id}`);
  }

  async exist(id: string) {
    try {
      await this.getDocument(id);
      return true;
    } catch (error) {
      return false;
    }
  }

  async search(query: string) {
    return this.esClient.get(`${this.URLINFO_INDEX}/_search`, {
      params: {
        query: {
          multi_match: {
            query,
            fields: ['title', 'siteName', 'description'],
          },
        },
      },
    });
  }
}

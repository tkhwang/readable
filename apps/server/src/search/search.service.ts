import { awsCredentials } from '@readable/common/constants';
import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { SearchIndex, UrlInfoSearchDocument } from './domain/models/search.model';

@Injectable()
export class SearchService {
  // MEMO(Teddy): It shoudl use @elasticsearch/elasticsearch-js#7.x official client.
  // But use axios client due to the auth problem.
  private readonly esClient;

  constructor() {
    this.esClient = axios.create({
      baseURL: awsCredentials.ELASTICSEARCH.ENDPOINT,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + Buffer.from(awsCredentials.ELASTICSEARCH.BASIC_AUTH_TOKEN).toString('base64'),
      },
    });
  }

  async get() {
    return this.esClient.get('/urlinfo');
  }

  /**
   * Create elasticsearch document index when registering urlInfo
   *
   * @param {UrlInfo} urlInfo
   * @return {*}
   * @memberof SearchService
   */
  async indexDocument(index: SearchIndex, elasticDoc?: UrlInfoSearchDocument) {
    if (!elasticDoc) return;

    const { id } = elasticDoc;
    return this.esClient.put(`${index}/_doc/${id}`, elasticDoc);
  }

  async getDocument(index: SearchIndex, id: string) {
    return this.esClient.get(`${index}/_doc/${id}`);
  }

  async exist(index: SearchIndex, id: string) {
    try {
      await this.getDocument(index, id);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Search text among urlInfo (url, title, siteName, description)
   *
   * @param {string} query
   * @return {*}
   * @memberof SearchService
   */
  async search(index: SearchIndex, query: string, fields: string[]) {
    const queryObject = {
      query: {
        multi_match: {
          query,
          fields,
        },
      },
    };

    try {
      // https://stackoverflow.com/a/45292081/2453632
      return await this.esClient.get(`${index}/_search`, {
        data: JSON.stringify(queryObject),
      });
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  }
}

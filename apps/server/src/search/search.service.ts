import { awsCredentials } from '@readable/common/constants';
import axios from 'axios';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  // MEMO(Teddy): It shoudl use @elasticsearch/elasticsearch-js#7.x official client.
  // But use axios client due to the auth problem.
  private readonly esClient;
  private readonly URLINFO_INDEX = 'urlinfo';

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

  /**
   * Search text among urlInfo (url, title, siteName, description)
   *
   * @param {string} query
   * @return {*}
   * @memberof SearchService
   */
  async search(query: string) {
    const queryObject = {
      query: {
        multi_match: {
          query,
          fields: ['url', 'title', 'siteName', 'description'],
        },
      },
    };

    try {
      // https://stackoverflow.com/a/45292081/2453632
      return await this.esClient.get(`${this.URLINFO_INDEX}/_search`, {
        data: JSON.stringify(queryObject),
      });
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  }
}

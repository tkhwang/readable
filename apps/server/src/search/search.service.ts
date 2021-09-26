import { awsCredentials } from '@readable/common/constants';
import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { SearchDoc, SearchIndex } from './domain/models/search.model';

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

  // async get() {
  //   return this.esClient.get('/urlinfo');
  // }

  async indexDocument(index: SearchIndex, searchDoc?: SearchDoc) {
    if (!searchDoc) return;

    const { id } = searchDoc;
    return this.esClient.put(`${index}/_doc/${id}`, searchDoc);
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

  async suggest(index: SearchIndex, query: string, field: string, howMany = 3) {
    const queryObject = {
      suggest: {
        tag: {
          prefix: query,
          completion: {
            field,
            size: howMany,
          },
        },
      },
    };

    try {
      const {
        data: { suggest },
      } = await this.esClient.post(`${index}/_search`, JSON.stringify(queryObject));

      if (suggest.tag.length === 0) return null;

      return suggest.tag[0].options.map(option => {
        const {
          _source: { id, tag, normalizedTag },
        } = option;
        return { id, tag, normalizedTag };
      });
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
      return null;
    }
  }
}

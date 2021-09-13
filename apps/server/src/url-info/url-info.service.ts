import { Injectable } from '@nestjs/common';
import * as ogs from 'open-graph-scraper';
import { UrlInfoBuilder } from './infrastructures/typeorm/entities/url-info.entity.builder';
import cheerio from 'cheerio';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlInfoRepository } from './infrastructures/typeorm/repositories/url-info.repository';

@Injectable()
export class UrlInfoService {
  constructor(@InjectRepository(UrlInfoRepository) private readonly urlInfoRepository: UrlInfoRepository) {}

  async findUrlInfoByUrlHash(urlHash: string) {
    return this.urlInfoRepository.findOne({ urlHash });
  }

  async extractSiteInformation(url: string) {
    const [urlInfoByLibrary, urlInfoByManual] = await Promise.all([
      this.extractSiteInformationByLibraryOgs(url),
      this.extractSiteInformationByManual(url),
    ]);

    return {
      ...urlInfoByManual,
      ...urlInfoByLibrary,
      type: urlInfoByLibrary.type || urlInfoByManual.type || '',
      siteName: urlInfoByLibrary.siteName || urlInfoByManual.siteName || '',
    };
  }

  async extractSiteInformationByLibraryOgs(url: string) {
    const { result } = await ogs({ url });

    return new UrlInfoBuilder()
      .setUrl(result['ogUrl'] ?? url)
      .setSiteName(result['ogSiteName'] ?? '')
      .setTitle(result['ogTitle'] ?? '')
      .setType(result['ogType'] ?? '')
      .setImageUrl(result['ogImage']['url'] ?? '')
      .setDescription(result['ogDescription'] ?? '')
      .build();
  }

  async extractSiteInformationByManual(url: string) {
    const parsedUrl = new URL(url);
    const siteName = parsedUrl.hostname;
    const pathName = parsedUrl.pathname;

    const html = await this.getHtml(url);
    const $ = cheerio.load(html.data as any);
    const title = $('title') ?? $('h1') ?? $('h1.tittle');

    return new UrlInfoBuilder()
      .setUrl(url)
      .setSiteName(siteName ?? '')
      .setTitle(title?.text() ?? '')
      .setType(pathName ? 'article' : 'website')
      .build();
  }

  private async getHtml(url: string) {
    return axios({
      method: 'get',
      url,
    });
  }
}

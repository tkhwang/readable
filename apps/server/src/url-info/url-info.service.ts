import { Injectable } from '@nestjs/common';
import * as ogs from 'open-graph-scraper';
import { UrlInfoBuilder } from './infrastructures/typeorm/entities/url-info.entity.builder';
import cheerio from 'cheerio';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlInfoRepository } from './infrastructures/typeorm/repositories/url-info.repository';
import { UrlInfo } from './infrastructures/typeorm/entities/url-info.entity';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { User } from '@readable/users/domain/models/user.model';

@Injectable()
export class UrlInfoService {
  constructor(
    @InjectRepository(UrlInfoRepository) private readonly urlInfoRepository: UrlInfoRepository,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  async getHowMany(urlHash: string) {
    return this.userBookmarkRepository.count({ where: { urlHash } });
  }

  async getUserBookmarkByHashAndUser(urlInfo: UrlInfo, string, user: User) {
    return (
      this.userBookmarkRepository
        .createQueryBuilder('userBookmark')
        // .leftJoinAndSelect('userBookmark.user', 'user')
        .leftJoinAndSelect('userBookmark.urlInfo', 'urlInfo')
        .leftJoinAndSelect('userBookmark.interest', 'interest')
        .leftJoinAndSelect('userBookmark.tags', 'tags')
        .where('userBookmark.urlHash = :urlHash', { urlHash: urlInfo.urlHash })
        .andWhere('userBookmark.userId = :userId', { userId: user.id })
        .getOne()
    );
  }

  async findUrlInfoByUrlHash(urlHash: string) {
    return this.urlInfoRepository.findOne({ urlHash });
  }

  async extractSiteInformation(url: string): Promise<UrlInfo> {
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

import { Injectable } from '@nestjs/common';
import * as ogs from 'open-graph-scraper';
import { BookmarkBRFO } from './domain/models/bookmark.model';
import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkBuilder } from './infrastructures/typeorm/entities/bookmark.entity.builder';
import { Bookmark as BookmarkEntity } from './infrastructures/typeorm/entities/bookmark.entity';
import { BookmarksRepository } from './infrastructures/typeorm/repositories/bookmarks.repository';
import { Root } from '@nestjs/graphql';
import { BookmarkUsersRepository } from './infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import axios from 'axios';
import { endpoints } from '@readable/common/constants';
import * as FormData from 'form-data';
import { TagsRepository } from '../tags/infrastructures/typeorm/repositories/tags.repository';
import { InterestsRepository } from '@readable/interests/infrastructures/typeorm/repositories/interest.repository';
import cheerio from 'cheerio';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectRepository(BookmarksRepository) private readonly bookmarksRepository: BookmarksRepository,
    @InjectRepository(BookmarkUsersRepository) private readonly bookmarkUsersRepository: BookmarkUsersRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository,
    @InjectRepository(InterestsRepository) private readonly interestsRepository: InterestsRepository,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository
  ) {}

  async extractSiteInformation(url: string): Promise<BookmarkEntity> {
    try {
      const [bookmarkParsedByLibrary, bookmarkParseByManaul] = await Promise.all([
        this.extractSiteInformationByLibraryOgs(url),
        this.extractSiteInformationByManual(url),
      ]);

      console.log('TCL: BookmarksService -> bookmarkParseByManaul', bookmarkParseByManaul);
      console.log('TCL: BookmarksService -> bookmarkParsedByLibrary', bookmarkParsedByLibrary);

      return {
        ...bookmarkParseByManaul,
        ...bookmarkParsedByLibrary,
        type: bookmarkParsedByLibrary.type || bookmarkParseByManaul.type || '',
        siteName: bookmarkParsedByLibrary.siteName || bookmarkParseByManaul.siteName || '',
      };
    } catch (error) {
      return await this.extractSiteInformationByManual(url);
    }
  }

  async getBookmarkByUrlHash(urlHash: string) {
    return this.bookmarksRepository.findOne({ urlHash });
  }

  async getNlpAnalysis(url: string) {
    try {
      const bodyFormData = new FormData();
      bodyFormData.append('ratio', '0.2');
      bodyFormData.append('url', url);
      bodyFormData.append('secret_key', process.env.NLP_SERVER_SECRET ?? '');

      const { data } = await axios({
        method: 'post',
        url: endpoints.nlp.url,
        headers: {
          ...bodyFormData.getHeaders(),
        },
        data: bodyFormData,
      });

      const { summary, keywords } = data;
      return { summary, tags: keywords };
    } catch (error) {
      return { summary: '', tags: [] };
    }
  }

  async mapTags(tags: string[]) {
    return Promise.all(
      tags.map(async tag => {
        let tagEntity = await this.tagsRepository.findOne({ where: { tag } });
        if (!tagEntity) {
          tagEntity = await this.tagsRepository.save(this.tagsRepository.create({ tag }));
        }
        return tagEntity.id;
      })
    );
  }

  /*
   * Field Resolver
   */
  async getFieldCollectors(@Root() bookmark: BookmarkBRFO) {
    const { id: bookmarkId } = bookmark;

    const bookmarkUsers = await this.bookmarkUsersRepository.find({ where: { bookmarkId } });

    const collectorUserIds = bookmarkUsers
      .filter(bookmarkUser => !bookmarkUser.scheduledAt && !bookmarkUser.donedAt)
      .map(bookmarkUser => bookmarkUser.userId);

    const collectors = await this.usersRepository.findByIds(collectorUserIds);
    return collectors ?? [];
  }

  async getFieldSchedulers(@Root() bookmark: BookmarkBRFO) {
    const { id: bookmarkId } = bookmark;

    const bookmarkUsers = await this.bookmarkUsersRepository.find({ where: { bookmarkId } });

    const schdulerUserIds = bookmarkUsers
      .filter(bookmarkUser => bookmarkUser.scheduledAt && !bookmarkUser.donedAt)
      .map(bookmarkUser => bookmarkUser.userId);

    const schdulers = await this.usersRepository.findByIds(schdulerUserIds);
    return schdulers ?? [];
  }

  async getFieldFinishers(@Root() bookmark: BookmarkBRFO) {
    const { id: bookmarkId } = bookmark;

    const bookmarkUsers = await this.bookmarkUsersRepository.find({ where: { bookmarkId } });

    const finisherUserIds = bookmarkUsers
      .filter(bookmarkUser => bookmarkUser.donedAt)
      .map(bookmarkUser => bookmarkUser.userId);

    const finishers = await this.usersRepository.findByIds(finisherUserIds);
    return finishers ?? [];
  }

  async getFieldInterest(@Root() bookmark: BookmarkBRFO) {
    const { interestId } = bookmark;

    return this.interestsRepository.findOne({ where: { id: interestId } });
  }

  async getFieldTags(@Root() bookmark: BookmarkBRFO) {
    const { tagIds } = bookmark;

    if (!tagIds || tagIds?.length === 0) return [];

    return this.tagsRepository.findByIds(tagIds);

    // const tags = await this.tagsRepository.findByIds(tagIds);
    // return tags.map(tag => tag.tag);
  }

  /*
   *  private
   */
  private async extractSiteInformationByLibraryOgs(url: string) {
    const { result } = await ogs({ url });

    const bookmark = new BookmarkBuilder()
      .setUrl(result['ogUrl'] ?? url)
      .setSiteName(result['ogSiteName'] ?? '')
      .setTitle(result['ogTitle'] ?? '')
      .setType(result['ogType'] ?? '')
      .setImageUrl(result['ogImage']['url'] ?? '')
      .setDescription(result['ogDescription'] ?? '')
      .build();

    return bookmark;
  }

  private async extractSiteInformationByManual(url: string) {
    const parsedUrl = new URL(url);
    const siteName = parsedUrl.hostname;
    const pathName = parsedUrl.pathname;

    const html = await this.getHtml(url);
    const $ = cheerio.load(html.data as any);
    const title = $('title') ?? $('h1') ?? $('h1.tittle');

    const bookmark = new BookmarkBuilder()
      .setUrl(url)
      .setSiteName(siteName ?? '')
      .setTitle(title?.text() ?? '')
      .setType(pathName ? 'article' : 'website')
      .build();

    return bookmark;
  }

  private async getHtml(url: string) {
    return axios({
      method: 'get',
      url,
    });
  }
}

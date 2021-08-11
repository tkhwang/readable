import { Injectable } from '@nestjs/common';
import * as ogs from 'open-graph-scraper';
import { BookmarkBRFO } from './domain/models/bookmark.model';
import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkBuilder } from './infrastructures/typeorm/entities/bookmark.entity.builder';
import { Bookmark as BookmarkEntity } from './infrastructures/typeorm/entities/bookmark.entity';
import { BookmarksRepository } from './infrastructures/typeorm/repositories/bookmarks.repository';
import { AddBookMarkWithAuthInput } from './applications/usecases/add-bookmark-with-auth/add-bookmark-with-auth.input';
import { Root } from '@nestjs/graphql';
import { BookmarkUsersRepository } from './infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import axios from 'axios';
import { endpoints } from '@readable/common/constants';
import * as FormData from 'form-data';
import { KeywordsRepository } from './infrastructures/typeorm/repositories/keywords.repository';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectRepository(BookmarksRepository) private readonly bookmarksRepository: BookmarksRepository,
    @InjectRepository(BookmarkUsersRepository) private readonly bookmarkUsersRepository: BookmarkUsersRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository,
    @InjectRepository(KeywordsRepository) private readonly keywordsRepository: KeywordsRepository
  ) {}

  async generateBasicBookmarkInfo(command: AddBookMarkWithAuthInput): Promise<BookmarkEntity> {
    const { url } = command;

    const ogsOptions = { url };
    const { result } = await ogs(ogsOptions);
    const siteName = result['ogSiteName'] || '';

    const bookmark = new BookmarkBuilder()
      .setUrl(result['ogUrl'] ?? url)
      .setSiteName(result['ogSiteName'] ?? '')
      .setTitle(result['ogTitle'] ?? '')
      .setType(result['ogType'] ?? '')
      .setImageUrl(result['ogImage']['url'] ?? '')
      .setDescription(result['ogDescription'] ?? '')
      .setTags(siteName ? [siteName] : [])
      .build();

    return bookmark;
  }

  async getBookmarkByUrlHash(urlHash: string) {
    return this.bookmarksRepository.findOne({ urlHash });
  }

  async getNlpAnalysis(bookmarkInfo: BookmarkBRFO) {
    const { url } = bookmarkInfo;

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
      return { summary, keywords };
    } catch (error) {
      return { summary: '', keywords: [] };
    }
  }

  async mapKeywords(keywords: string[]) {
    return Promise.all(
      keywords.map(async keyword => {
        let keywordEntity = await this.keywordsRepository.findOne({ where: { keyword } });
        if (!keywordEntity) {
          keywordEntity = await this.keywordsRepository.save(this.keywordsRepository.create({ keyword }));
        }
        return keywordEntity.id;
      })
    );
  }

  /*
   * Field Resolver
   */
  async getFieldCollector(@Root() bookmark: BookmarkBRFO) {
    const { id: bookmarkId } = bookmark;

    // TODO(Teddy): join query
    const userIds = await this.bookmarkUsersRepository.findUserIdsByBookmarkId(bookmarkId);
    const users = await this.usersRepository.findByIds(userIds);

    return users ?? [];
  }

  async getFieldKeywords(@Root() bookmark: BookmarkBRFO) {
    const { keywordIds } = bookmark;

    const keywords = await this.keywordsRepository.findByIds(keywordIds);
    return keywords.map(keyword => keyword.keyword);
  }
}

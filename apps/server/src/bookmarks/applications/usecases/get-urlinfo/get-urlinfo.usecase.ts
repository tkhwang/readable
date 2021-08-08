import { Usecase } from '@readable/common/usecase';
import { GetUrlInfoInput } from './get-urlinfo.input';
import * as sha256 from 'crypto-js/sha256';
import { BookmarksService } from '@readable/bookmarks/bookmarks.service';
import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkUsersRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { BookmarkBRFO } from '@readable/bookmarks/domain/models/bookmark.model';
import axios from 'axios';
import { endpoints } from '@readable/common/constants';
import * as FormData from 'form-data';
// import { default as FormData } from 'form-data';

export class GetUrlInfoUsecase implements Usecase<GetUrlInfoInput, BookmarkBRFO> {
  constructor(
    @InjectRepository(BookmarkUsersRepository) private readonly bookmarkUsersRepository: BookmarkUsersRepository,
    private readonly bookmarksService: BookmarksService
  ) {}

  async execute(query: GetUrlInfoInput) {
    const { url } = query;
    const urlHash = sha256(url).toString();

    const existingBookmark = await this.bookmarksService.getBookmarkByUrlHash(urlHash);
    if (existingBookmark) {
      existingBookmark['howMany'] = await this.getHowMany(urlHash);
      return existingBookmark;
    }

    const bookmarkInfo: BookmarkBRFO = await this.bookmarksService.generateBasicBookmarkInfo(query);
    bookmarkInfo.urlHash = urlHash;
    bookmarkInfo.howMany = await this.getHowMany(urlHash);

    // TODO(Teddy): WIP
    // bookmark.generatedImage = '...';

    await this.getNlpInfo(bookmarkInfo);

    return bookmarkInfo;
  }

  private async getHowMany(urlHash: string) {
    return this.bookmarkUsersRepository.count({ where: { urlHash } });
  }

  private async getNlpInfo(bookmarkInfo: BookmarkBRFO) {
    const { url } = bookmarkInfo;

    try {
      const bodyFormData = new FormData();
      bodyFormData.append('ratio', '0.2');
      bodyFormData.append('url', url);
      bodyFormData.append('secret_key', process.env.NLP_SERVER_SECRET);

      const data = await axios({
        method: 'post',
        url: endpoints.nlp.url,
        headers: {
          ...bodyFormData.getHeaders(),
        },
        data: bodyFormData,
      });

      return {
        summary: '',
        keywords: [],
      };
    } catch (error) {
      return {
        summary: '',
        keywords: [],
      };
    }
  }
}

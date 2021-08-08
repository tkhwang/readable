import { Usecase } from '@readable/common/usecase';
import { GetUrlInfoInput } from './get-urlinfo.input';
import * as sha256 from 'crypto-js/sha256';
import { BookmarksService } from '@readable/bookmarks/bookmarks.service';
import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkUsersRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { BookmarkBRFO } from '@readable/bookmarks/domain/models/bookmark.model';

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

    const { summary, keywords } = await this.bookmarksService.getNlpAnalysis(bookmarkInfo);
    bookmarkInfo.summary = summary ?? '';
    bookmarkInfo.keywordIds = await this.bookmarksService.mapKeywords(keywords.slice(0, 5));

    return bookmarkInfo;
  }

  private async getHowMany(urlHash: string) {
    return this.bookmarkUsersRepository.count({ where: { urlHash } });
  }
}

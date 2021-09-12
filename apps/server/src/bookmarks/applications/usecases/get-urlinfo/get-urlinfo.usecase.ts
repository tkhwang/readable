import { Usecase } from '@readable/common/applications/usecase';
import { GetUrlInfoInput } from './get-urlinfo.input';
import * as sha256 from 'crypto-js/sha256';
import { BookmarksService } from '@readable/bookmarks/bookmarks.service';
import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkUsersRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { BookmarkBRFO } from '@readable/bookmarks/domain/models/bookmark.model';
import { ImageService } from '@readable/image/image.service';

export class GetUrlInfoUsecase implements Usecase<GetUrlInfoInput, BookmarkBRFO> {
  constructor(
    private readonly bookmarksService: BookmarksService,
    private readonly imageService: ImageService,
    @InjectRepository(BookmarkUsersRepository) private readonly bookmarkUsersRepository: BookmarkUsersRepository
  ) {}

  async execute(query: GetUrlInfoInput) {
    const { url } = query;
    const urlHash = sha256(url).toString();

    const existingBookmark = await this.bookmarksService.getBookmarkByUrlHash(urlHash);
    if (existingBookmark) {
      existingBookmark['howMany'] = await this.getHowMany(urlHash);
      return existingBookmark;
    }

    const bookmarkInfo: BookmarkBRFO = await this.bookmarksService.extractSiteInformation(url);
    bookmarkInfo.urlHash = urlHash;
    bookmarkInfo.howMany = await this.getHowMany(urlHash);
    if (!bookmarkInfo.imageUrl) {
      bookmarkInfo.imageUrl = await this.imageService.getImageUrl(bookmarkInfo);
    }
    console.log('TCL: GetUrlInfoUsecase -> execute -> bookmarkInfo', bookmarkInfo);

    // const { summary, keywords } = await this.bookmarksService.getNlpAnalysis(bookmarkInfo);
    // bookmarkInfo.summary = summary ?? '';
    // bookmarkInfo.keywordIds = await this.bookmarksService.mapKeywords(keywords.slice(0, 5));

    return bookmarkInfo;
  }

  private async getHowMany(urlHash: string) {
    return this.bookmarkUsersRepository.count({ where: { urlHash } });
  }
}

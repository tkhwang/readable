import { Usecase } from '@readable/common/usecase';
import { GetUrlInfoInput } from './get-urlinfo.input';
import * as sha256 from 'crypto-js/sha256';
import { BookmarksService } from '@readable/bookmarks/bookmarks.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookmark as BookmarkEntity } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmark.entity';
import { Repository } from 'typeorm';
import { BookmarkUser } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmarkUser.entity';
import { BookmarkUserssRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { Bookmark as BookmarkModel } from '@readable/bookmarks/domain/models/bookmark.model';

export class GetUrlInfoUsecase implements Usecase<GetUrlInfoInput, BookmarkModel> {
  constructor(
    // TODO(Teddy): If not this repository, bookmarksService cannot be injected. Why ?
    @InjectRepository(BookmarkEntity) private readonly bookmarksRepository: Repository<BookmarkEntity>,
    @InjectRepository(BookmarkUser) private readonly bookmarkUserssRepository: BookmarkUserssRepository,
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

    const bookmarkInfo = await this.bookmarksService.generateBasicBookmarkInfo(query);
    bookmarkInfo.urlHash = urlHash;
    bookmarkInfo.howMany = await this.getHowMany(urlHash);

    // TODO(Teddy): WIP
    // bookmark.generatedImage = '...';

    return bookmarkInfo;
  }

  private async getHowMany(urlHash: string) {
    return this.bookmarkUserssRepository.count({ where: { urlHash } });
  }
}

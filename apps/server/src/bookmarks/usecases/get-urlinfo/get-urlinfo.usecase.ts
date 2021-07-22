import { Usecase } from '@readable/common/usecase';
import { GetUrlInfoInput } from './get-urlinfo.input';
import { Bookmark } from '@readable/bookmarks/models/bookmark.model';
import * as sha256 from 'crypto-js/sha256';
import { BookmarksService } from '@readable/bookmarks/bookmarks.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookmark as BookmarkEntity } from '@readable/bookmarks/infrastructures/typeorm/bookmark.entity';
import { Repository } from 'typeorm';

export class GetUrlInfoUsecase implements Usecase<GetUrlInfoInput, Bookmark> {
  constructor(
    private readonly bookmarksService: BookmarksService,
    @InjectRepository(BookmarkEntity) private readonly bookmarksRepository: Repository<BookmarkEntity>
  ) {}

  async execute(query: GetUrlInfoInput) {
    const { url } = query;

    const urlHash = sha256(url).toString();

    const existingBookmark = await this.bookmarksService.getBookmarkByUrlHash(urlHash);
    if (existingBookmark) return existingBookmark;

    const bookmarkInfo = await this.bookmarksService.generateBasicBookmarkInfo(query);
    bookmarkInfo.urlHash = urlHash;

    // TODO(Teddy): WIP
    // bookmark.generatedImage = '...';

    return bookmarkInfo;
  }
}

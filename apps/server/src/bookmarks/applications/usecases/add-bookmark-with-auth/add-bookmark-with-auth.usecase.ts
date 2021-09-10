import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { Bookmark } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmark.entity';
import { AddBookMarkWithAuthInput } from './add-bookmark-with-auth.input';
import { User as UserModel } from '@readable/users/domain/models/user.model';
import { BookmarksService } from '@readable/bookmarks/bookmarks.service';
import * as sha256 from 'crypto-js/sha256';
import { BookmarkUsersRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { BookmarksRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarks.repository';
import { User } from '@readable/users/infrastructures/typeorm/entities/user.entity';

export class AddBookmarkWithAuthUsecase implements Usecase<AddBookMarkWithAuthInput, Bookmark> {
  constructor(
    private readonly bookmarksService: BookmarksService,
    @InjectRepository(BookmarksRepository) private readonly bookmarksRepository: BookmarksRepository,
    @InjectRepository(BookmarkUsersRepository) private readonly bookmarkUsersRepository: BookmarkUsersRepository
  ) {}

  async execute(command: AddBookMarkWithAuthInput, requestUser: UserModel) {
    const { url, interestId, tagIds = [] } = command;
    const urlHash = sha256(url).toString();

    const existingBookmark = await this.bookmarksService.getBookmarkByUrlHash(urlHash);
    if (existingBookmark) {
      await this.updateBookmarkUser(urlHash, existingBookmark, requestUser);
      return existingBookmark;
    }

    const siteInfo = await this.bookmarksService.extractSiteInformation(url);
    siteInfo.urlHash = urlHash;

    const newBookmark = this.bookmarksRepository.create(siteInfo);
    newBookmark.interestId = interestId;
    newBookmark.tagIds = await this.bookmarksService.mapTags([siteInfo.siteName, ...tagIds]);

    // TODO(Teddy): WIP
    // const { summary, keywords } = await this.bookmarksService.getNlpAnalysis(bookmarkInfo);
    // bookmarkForAdding.summary = summary ?? '';
    // bookmarkForAdding.keywordIds = await this.bookmarksService.mapKeywords(keywords.slice(0, 5));

    const addedBookmark = await this.bookmarksRepository.save(newBookmark);
    await this.updateBookmarkUser(urlHash, addedBookmark, requestUser);

    return addedBookmark;
  }

  private async updateBookmarkUser(urlHash: string, bookmark: Bookmark, user: User) {
    const bookmarkUserForCheck = { urlHash, bookmarkId: bookmark.id, userId: user.id };

    const bookmarkUser = await this.bookmarkUsersRepository.findOne({ where: bookmarkUserForCheck });

    if (!bookmarkUser) {
      await this.bookmarkUsersRepository.insert(bookmarkUserForCheck);
    }
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/usecase';
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
    const { url } = command;
    const urlHash = sha256(url).toString();

    const existingBookmark = await this.bookmarksService.getBookmarkByUrlHash(urlHash);
    if (existingBookmark) {
      await this.updateBookmarkUser(urlHash, existingBookmark, requestUser);
      return existingBookmark;
    }

    const bookmarkInfo = await this.bookmarksService.generateBasicBookmarkInfo(command);
    bookmarkInfo.urlHash = urlHash;

    const bookmarkForAdding = this.bookmarksRepository.create(bookmarkInfo);
    bookmarkForAdding.keywordIds = await this.bookmarksService.mapKeywords([bookmarkInfo.siteName]);

    // TODO(Teddy): WIP
    // const { summary, keywords } = await this.bookmarksService.getNlpAnalysis(bookmarkInfo);
    // bookmarkForAdding.summary = summary ?? '';
    // bookmarkForAdding.keywordIds = await this.bookmarksService.mapKeywords(keywords.slice(0, 5));

    const addBookmark = await this.bookmarksRepository.save(bookmarkForAdding);
    await this.updateBookmarkUser(urlHash, addBookmark, requestUser);

    return addBookmark;
  }

  private async updateBookmarkUser(urlHash: string, bookmark: Bookmark, user: User) {
    const bookmarkUserForCheck = { urlHash, bookmarkId: bookmark.id, userId: user.id };

    const bookmarkUser = await this.bookmarkUsersRepository.findOne({ where: bookmarkUserForCheck });

    if (!bookmarkUser) {
      await this.bookmarkUsersRepository.insert(bookmarkUserForCheck);
    }
  }
}

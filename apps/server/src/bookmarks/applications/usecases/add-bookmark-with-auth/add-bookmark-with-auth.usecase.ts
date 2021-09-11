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
import { FindOrAddInterestWithAuthUseCase } from '@readable/interests/applications/usecases/find-or-add-interest/find-or-add-interest-with-auth.usecase';
import { FindOrAddInterestWithAuthInput } from '@readable/interests/applications/usecases/find-or-add-interest/find-or-add-interest-with-auth.input';

export class AddBookmarkWithAuthUsecase implements Usecase<AddBookMarkWithAuthInput, Bookmark> {
  constructor(
    private readonly bookmarksService: BookmarksService,
    private readonly findOrAddInterestWithAuthUseCase: FindOrAddInterestWithAuthUseCase,
    @InjectRepository(BookmarksRepository) private readonly bookmarksRepository: BookmarksRepository,
    @InjectRepository(BookmarkUsersRepository) private readonly bookmarkUsersRepository: BookmarkUsersRepository
  ) {}

  async execute(command: AddBookMarkWithAuthInput, requestUser: UserModel) {
    const { url, interest, tags = [] } = command;
    const urlHash = sha256(url).toString();

    const existingBookmark = await this.bookmarksService.getBookmarkByUrlHash(urlHash);
    if (existingBookmark) {
      await this.updateBookmarkUser(urlHash, existingBookmark, requestUser);
      return existingBookmark;
    }

    const siteInfo = await this.bookmarksService.extractSiteInformation(url);
    siteInfo.urlHash = urlHash;

    const newBookmark = this.bookmarksRepository.create(siteInfo);

    const findOrAddInterestWithAuthInput = new FindOrAddInterestWithAuthInput(interest);
    const mappedInterest = await this.findOrAddInterestWithAuthUseCase.execute(
      findOrAddInterestWithAuthInput,
      requestUser
    );
    newBookmark.interestId = mappedInterest.id;

    newBookmark.tagIds = await this.bookmarksService.mapTags([siteInfo.siteName, ...tags]);

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

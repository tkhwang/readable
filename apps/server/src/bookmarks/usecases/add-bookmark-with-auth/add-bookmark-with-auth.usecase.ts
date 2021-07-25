import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/usecase';
import { Repository } from 'typeorm';
import { Bookmark as BookmarkEntity } from '@readable/bookmarks/infrastructures/typeorm/bookmark.entity';
import { Bookmark as BookmarkModel } from '@readable/bookmarks/models/bookmark.model';
import { AddBookMarkWithAuthInput } from './add-bookmark-with-auth.input';
import { User as UserModel } from '@readable/users/domain/user.model';
import { User as UserEntity } from '@readable/users/infrastructures/typeorm/user.entity';
import { BookmarksService } from '@readable/bookmarks/bookmarks.service';
import * as sha256 from 'crypto-js/sha256';

export class AddBookmarkWithAuthUsecase implements Usecase<AddBookMarkWithAuthInput, BookmarkModel> {
  constructor(
    private readonly bookmarksService: BookmarksService,
    @InjectRepository(BookmarkEntity) private readonly bookmarksRepository: Repository<BookmarkEntity>
  ) {}

  async execute(command: AddBookMarkWithAuthInput, requestUser: UserModel) {
    const { url } = command;

    const urlHash = sha256(url).toString();

    const existingBookmark = await this.bookmarksService.getBookmarkByUrlHash(urlHash);
    if (existingBookmark) return existingBookmark;

    const bookmarkInfo = await this.bookmarksService.generateBasicBookmarkInfo(command);
    bookmarkInfo.urlHash = urlHash;

    // TODO(Teddy): WIP
    // bookmarkInfo.generatedImage = '...';
    // bookmarkInfo.user = requestUser as UserEntity;

    const newBookmark = this.bookmarksRepository.create(bookmarkInfo);
    return this.bookmarksRepository.save(newBookmark);
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/usecase';
import { Repository } from 'typeorm';
import { AddBookMarkInput } from './add-bookmark.input';
import { Bookmark as BookmarkModel } from '@readable/bookmarks/models/bookmark.model';
import { BookmarksService } from '@readable/bookmarks/bookmarks.service';
import * as sha256 from 'crypto-js/sha256';
import { Bookmark as BookmarkEntity } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmark.entity';

export class AddBookmarkUsecase implements Usecase<AddBookMarkInput, BookmarkModel> {
  constructor(
    private readonly bookmarksService: BookmarksService,
    @InjectRepository(BookmarkEntity) private readonly bookmarksRepository: Repository<BookmarkEntity>
  ) {}

  async execute(command: AddBookMarkInput) {
    const { url } = command;

    const urlHash = sha256(url).toString();

    const existingBookmark = await this.bookmarksService.getBookmarkByUrlHash(urlHash);
    if (existingBookmark) return existingBookmark;

    const bookmarkInfo = await this.bookmarksService.generateBasicBookmarkInfo(command);
    bookmarkInfo.urlHash = urlHash;

    // TODO(Teddy): WIP
    // bookmarkInfo.generatedImage = '...';

    const newBookmark = this.bookmarksRepository.create(bookmarkInfo);
    return this.bookmarksRepository.save(newBookmark);
  }
}

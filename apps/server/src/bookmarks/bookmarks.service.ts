import { Injectable } from '@nestjs/common';
import * as ogs from 'open-graph-scraper';
import { Bookmark as BookmarkModel, BookmarkBRFO } from './domain/models/bookmark.model';
import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkBuilder } from './infrastructures/typeorm/entities/bookmark.entity.builder';
import { Bookmark as BookmarkEntity } from './infrastructures/typeorm/entities/bookmark.entity';
import { BookmarksRepository } from './infrastructures/typeorm/repositories/bookmarks.repository';
import { AddBookMarkWithAuthInput } from './applications/usecases/add-bookmark-with-auth/add-bookmark-with-auth.input';
import { Root } from '@nestjs/graphql';
import { BookmarkUsersRepository } from './infrastructures/typeorm/repositories/bookmarkUsers.repository';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectRepository(BookmarkEntity) private readonly bookmarksRepository: BookmarksRepository,
    @InjectRepository(BookmarkUsersRepository) private readonly bookmarkUsersRepository: BookmarkUsersRepository // TODO(Teddy): WIP // @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {}

  async generateBasicBookmarkInfo(command: AddBookMarkWithAuthInput): Promise<BookmarkEntity> {
    const { url } = command;

    const ogsOptions = { url };
    const { result } = await ogs(ogsOptions);
    const siteName = result['ogSiteName'] || '';

    const bookmark = new BookmarkBuilder()
      .setUrl(result['ogUrl'] ?? url)
      .setSiteName(result['ogSiteName'] ?? '')
      .setTitle(result['ogTitle'] ?? '')
      .setType(result['ogType'] ?? '')
      .setImageUrl(result['ogImage']['url'] ?? '')
      .setDescription(result['ogDescription'] ?? '')
      .setTags(siteName ? [siteName] : [])
      .build();

    return bookmark;
  }

  async getBookmarkByUrlHash(urlHash: string) {
    return this.bookmarksRepository.findOne({ urlHash });
  }

  /*
   * Field Resolver
   */
  async getFieldCollector(@Root() bookmark: BookmarkBRFO) {
    const { id: bookmarkId } = bookmark;
    const userIds = await this.bookmarkUsersRepository.findUserIdsByBookmarkId(bookmarkId);
    // return this.usersRepository.findByIds(userIds);

    return userIds;
  }
}

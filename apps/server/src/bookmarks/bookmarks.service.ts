import { Injectable } from '@nestjs/common';
import * as ogs from 'open-graph-scraper';
import { BookmarkBRFO } from './domain/models/bookmark.model';
import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkBuilder } from './infrastructures/typeorm/entities/bookmark.entity.builder';
import { Bookmark as BookmarkEntity } from './infrastructures/typeorm/entities/bookmark.entity';
import { BookmarksRepository } from './infrastructures/typeorm/repositories/bookmarks.repository';
import { AddBookMarkWithAuthInput } from './applications/usecases/add-bookmark-with-auth/add-bookmark-with-auth.input';
import { Root } from '@nestjs/graphql';
import { BookmarkUsersRepository } from './infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectRepository(BookmarksRepository) private readonly bookmarksRepository: BookmarksRepository,
    @InjectRepository(BookmarkUsersRepository) private readonly bookmarkUsersRepository: BookmarkUsersRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
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

    // TODO(Teddy): join query
    const userIds = await this.bookmarkUsersRepository.findUserIdsByBookmarkId(bookmarkId);
    return this.usersRepository.findByIds(userIds);
  }
}

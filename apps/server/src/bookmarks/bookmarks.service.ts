import { Injectable } from '@nestjs/common';
import { AddBookMarkInput } from './usecases/add-bookmark/add-bookmark.input';
import * as ogs from 'open-graph-scraper';
import { BookmarkBuilder } from './infrastructures/typeorm/bookmark.entity.builder';
import { Bookmark as BookmarkModel } from './models/bookmark.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bookmark as BookmarkEntity } from './infrastructures/typeorm/bookmark.entity';

@Injectable()
export class BookmarksService {
  constructor(@InjectRepository(BookmarkEntity) private readonly bookmarksRepository: Repository<BookmarkEntity>) {}

  async generateBasicBookmarkInfo(command: AddBookMarkInput): Promise<BookmarkModel> {
    const { url } = command;

    const ogsOptions = { url };
    const { result } = await ogs(ogsOptions);

    const bookmark = new BookmarkBuilder()
      .setUrl(result['ogUrl'] ?? url)
      .setSiteName(result['ogSiteName'] ?? '')
      .setTitle(result['ogTitle'] ?? '')
      .setType(result['ogType'] ?? '')
      .setImageUrl(result['ogImage']['url'] ?? '')
      .setDescription(result['ogDescription'] ?? '')
      .setTags(result['ogTags'] ?? '')
      .build();

    return bookmark;
  }

  async getBookmarkByUrlHash(urlHash: string) {
    return this.bookmarksRepository.findOne({ urlHash });
  }
}

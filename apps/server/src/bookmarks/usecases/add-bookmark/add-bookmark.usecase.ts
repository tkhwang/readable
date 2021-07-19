import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/usecase';
import { Repository } from 'typeorm';
import { AddBookMarkInput } from './add-bookmark.input';
import * as ogs from 'open-graph-scraper';
import { BookmarkBuilder } from '@readable/bookmarks/infrastructures/typeorm/bookmark.entity.builder';
import { Bookmark as BookmarkEntity } from '@readable/bookmarks/infrastructures/typeorm/bookmark.entity';
import { Bookmark as BookmarkModel } from '@readable/bookmarks/models/bookmark.model';

export class AddBookmarkUsecase implements Usecase<AddBookMarkInput, BookmarkModel> {
  constructor(@InjectRepository(BookmarkEntity) private readonly bookmarksRepository: Repository<BookmarkEntity>) {}

  async execute(command: AddBookMarkInput) {
    const { url } = command;

    const ogsOptions = { url };
    const { result } = await ogs(ogsOptions);
    console.log('TCL: AddBookmarkUsecase -> execute -> result', result);

    const bookmark = new BookmarkBuilder()
      .setUrl(result['ogUrl'] ?? url)
      .setSiteName(result['ogSiteName'] ?? '')
      .setTitle(result['ogTitle'] ?? '')
      .setType(result['ogType'] ?? '')
      .setImageUrl(result['ogImage']['url'] ?? '')
      .setDescription(result['ogDescription'] ?? '')
      .setTags(result['ogTags'] ?? '')
      .build();

    bookmark.urlHash = '1234';
    bookmark.generatedImage = '...';

    const newBookmark = this.bookmarksRepository.create(bookmark);
    return this.bookmarksRepository.save(newBookmark);
  }
}

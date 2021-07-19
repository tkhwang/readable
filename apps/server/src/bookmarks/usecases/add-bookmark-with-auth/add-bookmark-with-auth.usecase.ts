import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/usecase';
import { Repository } from 'typeorm';
import * as ogs from 'open-graph-scraper';
import { BookmarkBuilder } from '@readable/bookmarks/infrastructures/typeorm/bookmark.entity.builder';
import { Bookmark as BookmarkEntity } from '@readable/bookmarks/infrastructures/typeorm/bookmark.entity';
import { Bookmark as BookmarkModel } from '@readable/bookmarks/models/bookmark.model';
import { AddBookMarkWithAuthInput } from './add-bookmark-with-auth.input';
import { User as UserModel } from '@readable/users/models/user.model';
import { User as UserEntity } from '@readable/users/infrastructures/typeorm/user.entity';

export class AddBookmarkWithAuthUsecase implements Usecase<AddBookMarkWithAuthInput, BookmarkModel> {
  constructor(@InjectRepository(BookmarkEntity) private readonly bookmarksRepository: Repository<BookmarkEntity>) {}

  async execute(command: AddBookMarkWithAuthInput, requestUser: UserModel) {
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
    bookmark.user = requestUser as UserEntity;

    const newBookmark = this.bookmarksRepository.create(bookmark);
    return this.bookmarksRepository.save(newBookmark);
  }
}

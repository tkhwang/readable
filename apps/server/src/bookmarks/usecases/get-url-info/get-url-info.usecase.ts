import { Injectable } from '@nestjs/common';
import { BookmarksRepository } from '@readable/bookmarks/bookmarks.repository';
import { Usecase } from '@readable/common/usecase';
import { User } from '@readable/users/entities/user.entity';
import { GetUrlInfoInput } from './get-url-info.input';
import * as ogs from 'open-graph-scraper';
import { BookmarkImageBuilder } from '@readable/bookmarks/models/bookmark-image.builder';
import { BookmarkBuilder } from '@readable/bookmarks/models/bookmark.entity.builder';
import { Bookmark } from '@readable/bookmarks/models/bookmark.entity';
@Injectable()
export class GetUrlInfoUsecase implements Usecase<GetUrlInfoInput, Partial<Bookmark>> {
  constructor(private readonly bookmarkRepository: BookmarksRepository) {}

  async execute(command: GetUrlInfoInput, requestUser?: User) {
    const { url: inputUrl } = command;
    const ogsOptions = { url: inputUrl };

    const { result } = await ogs(ogsOptions);

    if (!result?.success)
      return {
        url: inputUrl,
      };

    const { ogSiteName, ogTitle, ogType, ogUrl, ogDescription, ogImage } = result;

    const bookmarkImage = new BookmarkImageBuilder()
      .setUrl(ogImage['url'])
      .setType(ogImage['type'])
      .setWidth(ogImage['width'])
      .setHeight(ogImage['height'])
      .build();

    const bookmark = new BookmarkBuilder()
      .setUrl(ogUrl ?? inputUrl)
      .setSiteName(ogSiteName)
      .setTitle(ogTitle)
      .setType(ogType)
      .setDescription(ogDescription)
      .build();

    bookmark.image = bookmarkImage;

    // TODO(Teddy): Generate screen screenshot.

    return bookmark;
  }
}

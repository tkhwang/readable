import { Usecase } from '@readable/common/usecase';
import { GetUrlInfoInput } from './get-urlinfo.input';
import * as ogs from 'open-graph-scraper';
import { BookmarkBuilder } from '@readable/bookmarks/infrastructures/typeorm/bookmark.entity.builder';
import { Bookmark } from '@readable/bookmarks/models/bookmark.model';

export class GetUrlInfoUsecase implements Usecase<GetUrlInfoInput, Bookmark> {
  async execute(query: GetUrlInfoInput) {
    const { url } = query;

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

    bookmark.urlHash = '1234';
    bookmark.generatedImage = '...';

    return bookmark;
  }
}

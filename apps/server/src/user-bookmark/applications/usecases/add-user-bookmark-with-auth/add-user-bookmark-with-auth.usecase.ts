import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { UrlInfoRepository } from '@readable/url-info/infrastructures/typeorm/repositories/url-info.repository';
import { User } from '@readable/users/domain/models/user.model';
import { AddUserBookmarkWithAuthInput } from './add-user-bookmark-with-auth.input';
import * as sha256 from 'crypto-js/sha256';
import { UrlInfoService } from '@readable/url-info/url-info.service';
import { ImageService } from '@readable/image/image.service';
import { UserBookmarkService } from '@readable/user-bookmark/user-bookmark.service';
import { InterestsService } from '@readable/interests/interests.service';
import { TagsService } from '@readable/tags/tags.service';
import { SearchService } from '@readable/search/search.service';
import { RecommendUserBookmarksByTagsUsecase } from '@readable/recommend/applications/usecases/recommend-user-bookmarks-by-tags/recommend-user-bookmarks-by-tags.usecase';
import { RecommendUserBookmarksByTagsInput } from '@readable/recommend/applications/usecases/recommend-user-bookmarks-by-tags/recommend-user-bookmarks-by-tags.input';

export class AddUserBookmarkWithAuthUsecase implements Usecase<AddUserBookmarkWithAuthInput, any> {
  constructor(
    private readonly recommendUserBookmarksByTagsUsecase: RecommendUserBookmarksByTagsUsecase,
    private readonly userBookmarkService: UserBookmarkService,
    private readonly urlInfoService: UrlInfoService,
    private readonly imageService: ImageService,
    private readonly interestsService: InterestsService,
    private readonly tagsService: TagsService,
    private readonly searchService: SearchService,
    @InjectRepository(UrlInfoRepository) private readonly urlInfoRepository: UrlInfoRepository
  ) {}

  async execute(command: AddUserBookmarkWithAuthInput, requestUser: User) {
    const { url, interest: txtInterest, tags: txtTags = [] } = command;
    const urlHash = sha256(url).toString();

    const [interest, tags] = await Promise.all([
      this.interestsService.mapInterest(txtInterest, requestUser),
      this.tagsService.mapTags(txtTags),
    ]);

    const recommendUserBookmarksByTagsInput = new RecommendUserBookmarksByTagsInput(tags, urlHash, 4);

    const [existingUrlInfo, recommendations] = await Promise.all([
      this.urlInfoService.findUrlInfoByUrlHash(urlHash),
      this.recommendUserBookmarksByTagsUsecase.execute(recommendUserBookmarksByTagsInput, requestUser),
    ]);

    if (existingUrlInfo) {
      const userBookmark = await this.userBookmarkService.upsertUserBookmark(
        requestUser,
        existingUrlInfo,
        interest,
        tags
      );

      return {
        userBookmark,
        recommendations,
      };
    }

    const urlInfo = await this.urlInfoService.extractSiteInformation(url);
    if (!urlInfo.imageUrl) {
      urlInfo.imageUrl = await this.imageService.getImageUrl(urlInfo);
    }
    urlInfo.urlHash = urlHash;

    const newUrlInfo = await this.urlInfoRepository.save(this.urlInfoRepository.create(urlInfo));

    const [userBookmark] = await Promise.all([
      this.userBookmarkService.upsertUserBookmark(requestUser, newUrlInfo, interest, tags),
      this.searchService.indexDocument(newUrlInfo),
    ]);

    return {
      userBookmark,
      recommendations,
    };
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { UrlInfoRepository } from '@readable/url-info/infrastructures/typeorm/repositories/url-info.repository';
import { User } from '@readable/users/domain/models/user.model';
import { AddUserBookmarkWithAuthInput } from './add-user-bookmark-with-auth.input';
import * as sha256 from 'crypto-js/sha256';
import { UrlInfoService } from '@readable/url-info/url-info.service';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { ImageService } from '@readable/image/image.service';
import { UserBookmarkService } from '@readable/user-bookmark/user-bookmark.service';

export class AddUserBookmarkWithAuthUsecase implements Usecase<AddUserBookmarkWithAuthInput, any> {
  constructor(
    private readonly userBookmarkService: UserBookmarkService,
    private readonly urlInfoService: UrlInfoService,
    private readonly imageService: ImageService,
    @InjectRepository(UrlInfoRepository) private readonly urlInfoRepository: UrlInfoRepository,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  async execute(command: AddUserBookmarkWithAuthInput, requestUser: User) {
    const { url, interest: txtInterest, tags: txtTags = [] } = command;
    const urlHash = sha256(url).toString();

    const existingUrlInfo = await this.urlInfoService.findUrlInfoByUrlHash(urlHash);
    if (existingUrlInfo) {
      return this.userBookmarkService.upsertUserBookmark(requestUser, existingUrlInfo, txtInterest, txtTags);
    }

    const urlInfo = await this.urlInfoService.extractSiteInformation(url);
    if (!urlInfo.imageUrl) {
      urlInfo.imageUrl = await this.imageService.getImageUrl(urlInfo);
    }
    urlInfo.urlHash = urlHash;

    const newUrlInfo = await this.urlInfoRepository.save(this.urlInfoRepository.create(urlInfo));
    return this.userBookmarkService.upsertUserBookmark(requestUser, newUrlInfo, txtInterest, txtTags);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { ImageService } from '@readable/image/image.service';
import { InterestsRepository } from '@readable/interests/infrastructures/typeorm/repositories/interest.repository';
import { InterestsService } from '@readable/interests/interests.service';
import { UrlInfoService } from '@readable/url-info/url-info.service';
import { User } from '@readable/users/domain/models/user.model';
import * as sha256 from 'crypto-js/sha256';

@Injectable()
export class ExtractUrlInfoUsecase implements Usecase<string, any> {
  constructor(
    private readonly urlInfoService: UrlInfoService,
    private readonly imageService: ImageService,
    private readonly interestsService: InterestsService,
    @InjectRepository(InterestsRepository) private readonly interestsRepository: InterestsRepository
  ) {}

  async execute(url: string, requestUser: User) {
    const urlHash = sha256(url).toString();

    const [existingUrlInfo, howMany, myInterests, latestInterest] = await Promise.all([
      this.urlInfoService.findUrlInfoByUrlHash(urlHash),
      this.urlInfoService.getHowMany(urlHash),
      this.interestsService.getInterestsByUser(requestUser),
      this.interestsRepository.findOne(requestUser.latestInterestId),
    ]);

    if (existingUrlInfo) {
      existingUrlInfo['howMany'] = howMany;
      const userBookmark = await this.urlInfoService.getUserBookmarkByHashAndUser(
        existingUrlInfo,
        urlHash,
        requestUser
      );
      return {
        urlInfo: existingUrlInfo,
        userBookmark,
        interests: myInterests,
        latestInterest,
      };
    }

    const urlInfo = await this.urlInfoService.extractSiteInformation(url);
    urlInfo.urlHash = urlHash;
    urlInfo['howMany'] = howMany;
    if (!urlInfo.imageUrl) {
      urlInfo.imageUrl = await this.imageService.getImageUrl(urlInfo);
    }

    return {
      urlInfo,
      interests: myInterests,
      latestInterest,
    };
  }
}

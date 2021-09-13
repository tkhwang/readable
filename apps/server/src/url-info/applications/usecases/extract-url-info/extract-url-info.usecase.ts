import { Injectable } from '@nestjs/common';
import { Usecase } from '@readable/common/applications/usecase';
import { UrlInfoService } from '@readable/url-info/url-info.service';
import { User } from '@readable/users/domain/models/user.model';

@Injectable()
export class ExtractUrlInfoUsecase implements Usecase<string, any> {
  constructor(private readonly urlInfoService: UrlInfoService) {}

  async execute(url: string, requestUser: User) {
    const urlInfo = await this.urlInfoService.extractSiteInformation(url);

    return urlInfo;
  }
}

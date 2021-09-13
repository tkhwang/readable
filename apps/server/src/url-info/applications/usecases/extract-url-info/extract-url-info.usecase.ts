import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { UrlInfoRepository } from '@readable/url-info/infrastructures/typeorm/repositories/url-info.repository';
import { UrlInfoService } from '@readable/url-info/url-info.service';
import { User } from '@readable/users/domain/models/user.model';
import * as sha256 from 'crypto-js/sha256';

@Injectable()
export class ExtractUrlInfoUsecase implements Usecase<string, any> {
  constructor(
    private readonly urlInfoService: UrlInfoService,
    @InjectRepository(UrlInfoRepository) private readonly urlInfoRepository: UrlInfoRepository
  ) {}

  async execute(url: string, requestUser: User) {
    const urlHash = sha256(url).toString();

    const existingUrlInfo = await this.urlInfoService.findUrlInfoByUrlHash(urlHash);
    console.log('TCL: ExtractUrlInfoUsecase -> execute -> existingUrlInfo', existingUrlInfo);

    const urlInfo = await this.urlInfoService.extractSiteInformation(url);
    return urlInfo;
  }
}

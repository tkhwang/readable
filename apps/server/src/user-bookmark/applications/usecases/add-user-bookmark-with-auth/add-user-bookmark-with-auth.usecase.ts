import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { UrlInfoRepository } from '@readable/url-info/infrastructures/typeorm/repositories/url-info.repository';
import { User } from '@readable/users/domain/models/user.model';
import { AddUserBookmarkWithAuthInput } from './add-user-bookmark-with-auth.input';
import * as sha256 from 'crypto-js/sha256';
import { UrlInfoService } from '@readable/url-info/url-info.service';
import { InterestsService } from '@readable/interests/interests.service';
import { TagsService } from '@readable/tags/tags.service';

export class AddUserBookmarkWithAuthUsecase implements Usecase<AddUserBookmarkWithAuthInput, any> {
  constructor(
    private readonly urlInfoService: UrlInfoService,
    private readonly interestsService: InterestsService,
    private readonly tagsService: TagsService,

    @InjectRepository(UrlInfoRepository) private readonly urlInfoRepository: UrlInfoRepository
  ) {}

  async execute(command: AddUserBookmarkWithAuthInput, requestUser: User) {
    const { url, interest: txtInterest, tags: txtTags = [] } = command;
    const urlHash = sha256(url).toString();

    const existingUrlInfo = await this.urlInfoService.findUrlInfoByUrlHash(urlHash);
    console.log('TCL: AddUserBookmarkWithAuthUsecase -> execute -> existingUrlInfo', existingUrlInfo);

    const [interest, tags] = await Promise.all([
      this.interestsService.mapInterest(txtInterest),
      this.tagsService.mapTags(txtTags),
    ]);

    console.log('TCL: AddUserBookmarkWithAuthUsecase -> execute -> interest', interest);
    console.log('TCL: AddUserBookmarkWithAuthUsecase -> execute -> tags', tags);

    return existingUrlInfo;
  }
}

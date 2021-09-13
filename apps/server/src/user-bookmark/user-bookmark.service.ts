import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InterestsRepository } from '@readable/interests/infrastructures/typeorm/repositories/interest.repository';
import { InterestsService } from '@readable/interests/interests.service';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { TagsService } from '@readable/tags/tags.service';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';
import { UrlInfoRepository } from '@readable/url-info/infrastructures/typeorm/repositories/url-info.repository';
import { User } from '@readable/users/domain/models/user.model';
import { UserBookmarkRepository } from './infrastructures/typeorm/repositories/user-bookmark.repository';

@Injectable()
export class UserBookmarkService {
  constructor(
    private readonly interestsService: InterestsService,
    private readonly tagsService: TagsService,
    @InjectRepository(UrlInfoRepository) private readonly urlInfoRepository: UrlInfoRepository,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository,
    @InjectRepository(InterestsRepository) private readonly interestsRepository: InterestsRepository,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository
  ) {}

  async getHowMany(urlHash: string) {
    return this.userBookmarkRepository.count({ where: { urlHash } });
  }

  async upsertUserBookmark(user: User, urlInfo: UrlInfo, txtInterest: string, txtTags: string[]) {
    const [existingUserBookmark, interest, tags] = await Promise.all([
      this.userBookmarkRepository.findOne({
        where: { urlHash: urlInfo.urlHash, user },
      }),
      this.interestsService.mapInterest(txtInterest, user),
      this.tagsService.mapTags(txtTags),
    ]);

    if (existingUserBookmark) {
      const updatedUserBookmark = {
        ...existingUserBookmark,
        interest,
        tags,
      };
      return this.userBookmarkRepository.save(updatedUserBookmark);
    }

    const newUserBookmark = this.userBookmarkRepository.create(urlInfo);
    newUserBookmark.urlInfo = urlInfo;
    newUserBookmark.interest = interest;
    newUserBookmark.tags = tags;
    newUserBookmark.user = user;

    return this.userBookmarkRepository.save(newUserBookmark);
  }
}

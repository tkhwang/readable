import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InterestsService } from '@readable/interests/interests.service';
import { TagsService } from '@readable/tags/tags.service';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';
import { User } from '@readable/users/domain/models/user.model';
import { UserBookmarkRepository } from './infrastructures/typeorm/repositories/user-bookmark.repository';

@Injectable()
export class UserBookmarkService {
  constructor(
    private readonly interestsService: InterestsService,
    private readonly tagsService: TagsService,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository // @InjectRepository(UrlInfoRepository) private readonly urlInfoRepository: UrlInfoRepository, // @InjectRepository(InterestsRepository) private readonly interestsRepository: InterestsRepository, // @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository
  ) {}

  async getHowMany(urlHash: string) {
    return this.userBookmarkRepository.count({ where: { urlHash } });
  }

  async upsertUserBookmark(user: User, urlInfo: UrlInfo, txtInterest: string, txtTags: string[]) {
    const [existingUserBookmark, interest, tags] = await Promise.all([
      this.userBookmarkRepository.findOne({
        where: { urlHash: urlInfo.urlHash, userId: user.id },
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

    const newUserBookmark = this.userBookmarkRepository.create({
      urlHash: urlInfo.urlHash,
      urlInfo,
      interest,
      tags,
      userId: user.id,
    });

    return this.userBookmarkRepository.save(newUserBookmark);
  }
}

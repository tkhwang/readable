import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Interest } from '@readable/interests/infrastructures/typeorm/entities/interest.entity';
import { InterestsService } from '@readable/interests/interests.service';
import { TagsService } from '@readable/tags/tags.service';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';
import { UserNotFoundExcepiton } from '@readable/users/domain/errors/users.error';
import { User } from '@readable/users/domain/models/user.model';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { UserBookmarkRepository } from './infrastructures/typeorm/repositories/user-bookmark.repository';

@Injectable()
export class UserBookmarkService {
  constructor(
    private readonly interestsService: InterestsService,
    private readonly tagsService: TagsService,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {}

  async getHowMany(urlHash: string) {
    return this.userBookmarkRepository.count({ where: { urlHash } });
  }

  async getUserBookmarksByUser(user: User) {
    return (
      this.userBookmarkRepository
        .createQueryBuilder('userBookmark')
        // .leftJoinAndSelect('userBookmark.user', 'user')
        .leftJoinAndSelect('userBookmark.urlInfo', 'urlInfo')
        .leftJoinAndSelect('userBookmark.interest', 'interest')
        .leftJoinAndSelect('userBookmark.tags', 'tags')
        .where('userBookmark.userId = :userId', { userId: user.id })
        .orderBy('userBookmark.createdAt', 'DESC')
        .getMany()
    );
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

      const [userbookmark] = await Promise.all([
        this.userBookmarkRepository.save(updatedUserBookmark),
        this.updateLatestInterest(user, interest),
      ]);

      return userbookmark;
    }

    const newUserBookmark = this.userBookmarkRepository.create({
      urlHash: urlInfo.urlHash,
      urlInfo,
      interest,
      tags,
      userId: user.id,
    });

    const [newlyAddedUserBookmark] = await Promise.all([
      this.userBookmarkRepository.save(newUserBookmark),
      this.updateLatestInterest(user, interest),
    ]);

    return newlyAddedUserBookmark;
  }

  // MEMO(Teddy): It should be in userModule, but there is here due to DI issue.
  private async updateLatestInterest(requestUser: User, interest: Interest) {
    const user = await this.usersRepository.findOne(requestUser.id);
    if (!user) throw new UserNotFoundExcepiton(requestUser.id);

    user.latestInterestId = interest.id;
    return this.usersRepository.save(user);
  }
}

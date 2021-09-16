import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Interest } from '@readable/interests/infrastructures/typeorm/entities/interest.entity';
import { InterestsService } from '@readable/interests/interests.service';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { TagsService } from '@readable/tags/tags.service';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';
import { UserNotFoundExcepiton } from '@readable/users/domain/errors/users.error';
import { User } from '@readable/users/domain/models/user.model';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { IsNull, Not } from 'typeorm';
import { UserBookmarkBRFO } from './domain/model/user-bookmark.model';
import { UserBookmark } from './infrastructures/typeorm/entities/user-bookmark.entity';
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

  // TODO(Teddy): WIP - userBookmark recommendation using DB only
  async findRecommendedUserBookmarks(urlHash: string, tags: Tag[], user: User) {
    return tags.reduce(async (acc, cur) => {
      const recommendedUserBookmarks = await this.findRecommendedUserBookmarksByTag(urlHash, cur, user);
      return { ...(await acc), [cur.tag]: recommendedUserBookmarks };
    }, {});
  }

  async getUserBookmarksByUser(user: User) {
    return this.userBookmarkRepository
      .createQueryBuilder('userBookmark')
      .leftJoinAndSelect('userBookmark.urlInfo', 'urlInfo')
      .leftJoinAndSelect('userBookmark.interest', 'interest')
      .leftJoinAndSelect('userBookmark.tags', 'tags')
      .where('userBookmark.userId = :userId', { userId: user.id })
      .orderBy('userBookmark.createdAt', 'DESC')
      .getMany();
  }

  async upsertUserBookmark(user: User, urlInfo: UrlInfo, interest: Interest, tags: Tag[]) {
    const existingUserBookmark = await this.userBookmarkRepository.findOne({
      where: { urlHash: urlInfo.urlHash, userId: user.id },
    });

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

  /*
   * Field Resolver
   */
  async getFieldBookmarkers(userBookmark: UserBookmarkBRFO) {
    const userBookmarks = await this.userBookmarkRepository.find({ where: { urlHash: userBookmark.urlHash } });
    const userIds = (userBookmarks ?? []).map(userBookmark => userBookmark.userId);

    const users = await this.usersRepository.findByIds(userIds);
    return users ?? [];
  }

  async getFieldReaders(userBookmark: UserBookmarkBRFO) {
    const userBookmarks = await this.userBookmarkRepository.find({
      where: { urlHash: userBookmark.urlHash, donedAt: Not(IsNull()) },
    });
    const userIds = (userBookmarks ?? []).map(userBookmark => userBookmark.userId);

    const users = await this.usersRepository.findByIds(userIds);
    return users ?? [];
  }

  private async findRecommendedUserBookmarksByTag(urlHash: string, tag: Tag, user: User) {
    return this.userBookmarkRepository
      .createQueryBuilder('userBookmark')
      .innerJoinAndSelect('userBookmark.urlInfo', 'urlInfo')
      .innerJoinAndSelect('userBookmark.tags', 'tag', 'tag.id = (:tagId)', { tagId: tag.id })
      .where('userBookmark.urlHash != :urlHash', { urlHash })
      .andWhere('userBookmark.userId != :userId', { userId: user.id })
      .groupBy('userBookmark.urlHash')
      .limit(2)
      .getMany();
  }

  // MEMO(Teddy): It should be in userModule, but there is here due to DI issue.
  private async updateLatestInterest(requestUser: User, interest: Interest) {
    const user = await this.usersRepository.findOne(requestUser.id);
    if (!user) throw new UserNotFoundExcepiton(requestUser.id);

    user.latestInterestId = interest.id;
    return this.usersRepository.save(user);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Interest } from '@readable/interests/infrastructures/typeorm/entities/interest.entity';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';
import { UserNotFoundException } from '@readable/users/domain/errors/users.error';
import { User } from '@readable/users/domain/models/user.model';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { IsNull, Not } from 'typeorm';
import { UserBookmarkBRFO } from '../domain/user-bookmark.model';
import { UserBookmarkRepository } from '../adapter/out/persistence/user-bookmark.repository';

@Injectable()
export class UserBookmarkService {
  constructor(
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {}

  async getHowMany(urlHash: string) {
    return this.userBookmarkRepository.count({ where: { urlHash } });
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
    const userBookmarks = await this.userBookmarkRepository.find({
      where: { urlHash: userBookmark.urlHash, donedAt: IsNull() },
      take: 5,
      order: {
        createdAt: 'DESC',
      },
    });
    const userIds = (userBookmarks ?? []).map(userBookmark => userBookmark.userId);

    const users = await this.usersRepository.findByIds(userIds);
    return users ?? [];
  }

  async getFieldBookmarkersCount(userBookmark: UserBookmarkBRFO) {
    return this.userBookmarkRepository.count({ where: { urlHash: userBookmark.urlHash, donedAt: IsNull() } });
  }

  async getFieldReaders(userBookmark: UserBookmarkBRFO) {
    const userBookmarks = await this.userBookmarkRepository.find({
      where: { urlHash: userBookmark.urlHash, donedAt: Not(IsNull()) },
      take: 5,
      order: {
        createdAt: 'DESC',
      },
    });
    const userIds = (userBookmarks ?? []).map(userBookmark => userBookmark.userId);

    const users = await this.usersRepository.findByIds(userIds);
    return users ?? [];
  }

  async getFieldReadersCount(userBookmark: UserBookmarkBRFO) {
    return this.userBookmarkRepository.count({ where: { urlHash: userBookmark.urlHash, donedAt: Not(IsNull()) } });
  }

  // MEMO(Teddy): It should be in userModule, but there is here due to DI issue.
  private async updateLatestInterest(requestUser: User, interest: Interest) {
    const user = await this.usersRepository.findOne(requestUser.id);
    if (!user) throw new UserNotFoundException(requestUser.id);

    user.latestInterestId = interest.id;
    return this.usersRepository.save(user);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { User } from '@readable/users/domain/models/user.model';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { includes } from 'lodash';
import { TagBRFO } from './domain/models/tag.model';
import { TagsRepository } from './infrastructures/typeorm/repositories/tags.repository';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {}

  /*
   * Field Resolver
   */

  async getFieldFollowersCount(tag: TagBRFO) {
    return this.usersRepository
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.tags', 'tag', 'tag.id IN (:tagIds)', {
        tagIds: [tag.id],
      })
      .getCount();
  }

  async getFieldUserBookmarksCount(tag: TagBRFO) {
    return this.userBookmarkRepository
      .createQueryBuilder('userBookmark')
      .innerJoinAndSelect('userBookmark.tags', 'tag', 'tag.id IN (:tagIds)', {
        tagIds: [tag.id],
      })
      .getCount();
  }

  async getFieldIsFollowingTag(tag: TagBRFO, user: User) {
    const userEntity = await this.usersRepository.findOne({
      where: { id: user.id },
      relations: ['tags'],
    });

    const userTagIds = (userEntity?.tags ?? []).map(tag => tag.id);

    return userTagIds.includes(tag.id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { UserNotFoundException } from '@readable/users/domain/errors/users.error';
import { User } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { In } from 'typeorm';
import { RecommendUserInput } from './recommend-user.input';

@Injectable()
export class RecommendUserUseCase implements Usecase<RecommendUserInput, User[]> {
  constructor(
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  // user.tags 와 user 가 bookmark 한 tag 가 유사한 following 하지 않은 유저를 찾는다.
  async execute(query: RecommendUserInput) {
    const { userId } = query;

    const [user, userBookmarks] = await Promise.all([
      this.usersRepository.findOne({
        where: { id: userId },
        relations: ['tags'],
      }),
      this.userBookmarkRepository.find({
        where: { userId },
      }),
    ]);
    if (!user) throw new UserNotFoundException(userId);

    const tagsUserFollows = this.findTagsUserFollows(user);
    const tagsUserUses = await this.findTagsUserUses(user);

    const userTags = this.filterUniqueTags([...tagsUserFollows, ...tagsUserUses]);
    if (userTags.length === 0) return [];

    const recommendedUsers = await this.findOtherUsersWithMyTags(userId, userTags);
    return recommendedUsers ?? [];
  }

  private async findOtherUsersWithMyTags(userId: string, userTags: Tag[]) {
    const otherUserBookmarksWithMyTags = await this.userBookmarkRepository.findOtherUserBookmarksByTags(
      userId,
      userTags
    );
    if (otherUserBookmarksWithMyTags.length === 0) return [];

    const otherUserIdsWithMyTags = otherUserBookmarksWithMyTags.map(bookmark => bookmark.userId);
    return this.usersRepository.find({
      where: { id: In(otherUserIdsWithMyTags) },
    });
  }

  private filterUniqueTags(tags: Tag[]) {
    const seen = new Set();
    return tags.filter(tag => {
      const duplicate = seen.has(tag.id);
      seen.add(tag.id);
      return !duplicate;
    });
  }

  private findTagsUserFollows(user: User): Tag[] {
    return user.tags ?? [];
  }

  async findTagsUserUses(user: User) {
    return this.tagsRepository.findTagsUserUses(user.id);
  }
}

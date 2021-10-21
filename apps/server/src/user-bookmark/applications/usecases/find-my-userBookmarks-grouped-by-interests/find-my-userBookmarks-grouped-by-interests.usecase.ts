import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { InterestsRepository } from '@readable/interests/infrastructures/typeorm/repositories/interest.repository';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { FindMyUserBookmarksGroupedByInterestsInput } from './find-my-userBookmarks-grouped-by-interests.input';
import { FindMyUserBookmarksGroupedByInterestsOutput } from './find-my-userBookmarks-grouped-by-interests.output';

@Injectable()
export class FindMyUserBookmarksGroupedByInterestsUsecase
  implements Usecase<FindMyUserBookmarksGroupedByInterestsInput, FindMyUserBookmarksGroupedByInterestsOutput[]> {
  constructor(
    @InjectRepository(InterestsRepository) private readonly interestsRepository: InterestsRepository,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {}

  async execute(query: FindMyUserBookmarksGroupedByInterestsInput) {
    const { userId } = query;
    const result: FindMyUserBookmarksGroupedByInterestsOutput[] = [];

    const myInterests = await this.interestsRepository.find({ where: { userId } });

    if (!myInterests || myInterests.length === 0) {
      return [];
    }

    for (const interest of myInterests) {
      const userBookmarksByInterest = await this.userBookmarkRepository.find({
        where: {
          userId,
          interest,
        },
        take: 3,
        order: {
          createdAt: 'DESC',
        },
        relations: ['urlInfo'],
      });

      if (userBookmarksByInterest && userBookmarksByInterest.length > 0) {
        const output = new FindMyUserBookmarksGroupedByInterestsOutput(interest.interest, userBookmarksByInterest);
        result.push(output);
      }
    }
    return result.sort((a, b) => b.userBookmarks.length - a.userBookmarks.length);
  }
}

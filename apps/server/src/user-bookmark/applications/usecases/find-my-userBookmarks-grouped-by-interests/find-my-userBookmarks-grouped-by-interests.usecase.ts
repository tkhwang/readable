import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { InterestsRepository } from '@readable/interests/infrastructures/typeorm/repositories/interest.repository';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { User } from '@readable/users/domain/models/user.model';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { FindMyUserBookmarksGroupedByInterestsInput } from './find-my-userBookmarks-grouped-by-interests.input';
import {
  FindMyUserBookmarksGroupedByInterestData,
  FindMyUserBookmarksGroupedByInterestsOutput,
} from './find-my-userBookmarks-grouped-by-interests.output';

@Injectable()
export class FindMyUserBookmarksGroupedByInterestsUsecase
  implements Usecase<FindMyUserBookmarksGroupedByInterestsInput, FindMyUserBookmarksGroupedByInterestsOutput[]> {
  constructor(
    @InjectRepository(InterestsRepository) private readonly interestsRepository: InterestsRepository,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {}

  async execute(query: FindMyUserBookmarksGroupedByInterestsInput, requestUser: User) {
    const { limitOfInterests, limitOfUserBookmarks } = query;
    const result: FindMyUserBookmarksGroupedByInterestsOutput[] = [];

    const myInterests = await this.interestsRepository.find({
      where: { userId: requestUser.id },
      order: {
        interest: 'ASC',
        createdAt: 'DESC',
      },
      take: limitOfInterests,
    });

    if (!myInterests || myInterests.length === 0) {
      return [];
    }

    for (const interest of myInterests) {
      const userBookmarksByInterest = await this.userBookmarkRepository.find({
        where: {
          userId: requestUser.id,
          interest,
        },
        take: limitOfUserBookmarks,
        order: {
          createdAt: 'DESC',
        },
        relations: ['urlInfo'],
      });

      const interestData = new FindMyUserBookmarksGroupedByInterestData(interest.id, interest.interest);

      if (userBookmarksByInterest && userBookmarksByInterest.length > 0) {
        const output = new FindMyUserBookmarksGroupedByInterestsOutput(interestData, userBookmarksByInterest);
        result.push(output);
      } else {
        const output = new FindMyUserBookmarksGroupedByInterestsOutput(interestData, []);
        result.push(output);
      }
    }

    return result;
  }
}

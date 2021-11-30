import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { UserBookmarkRepository } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.repository';
import { User } from '@readable/users/domain/models/user.model';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { FindUsersHavingManyFollowersWithAuthInput } from './find-users-having-many-followers-with-auth.input';

@Injectable()
export class FindUsersHavingManyFollowersWithAuthUsecase
  implements Usecase<FindUsersHavingManyFollowersWithAuthInput, any> {
  constructor(
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {}

  async execute(query: FindUsersHavingManyFollowersWithAuthInput, requestUser: User) {
    const { howMany } = query;
    return this.usersRepository.findManyFollowersHavingUsers(howMany);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { User } from '@readable/users/domain/models/user.model';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { FindManyFollowersWithAuthInput } from './find-many-followers-with-auth.input';

@Injectable()
export class FindManyFollowersWithAuthUsecase implements Usecase<FindManyFollowersWithAuthInput, any> {
  constructor(
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {}

  async execute(query: FindManyFollowersWithAuthInput, requestUser: User) {
    const { howMany } = query;
    return this.usersRepository.findManyFollowersHavingUsers(howMany);
  }
}

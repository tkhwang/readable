import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { UserBookmarkRepository } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.repository';
import { User as UserModel } from '@readable/users/domain/models/user.model';
import { User as UserEntity } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { FindUsersHavingManyUserBookmarksWithAuthInput } from './find-users-having-many-userBookmarks-with-auth.input';

@Injectable()
export class FindManyUserBookmarksHavingUsersWithAuthUsecase
  implements Usecase<FindUsersHavingManyUserBookmarksWithAuthInput, any> {
  constructor(
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {}

  async execute(query: FindUsersHavingManyUserBookmarksWithAuthInput, requestUser: UserModel) {
    const { howMany } = query;
    return this.usersRepository.findManyUserBookmarksHavingUsers(howMany);
  }
}

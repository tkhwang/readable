import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { User } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { GetUserProfileInput } from './get-user-profile.input';

@Injectable()
export class GetUserProfileUsecase implements Usecase<GetUserProfileInput, User | undefined> {
  constructor(
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {}

  async execute(query: GetUserProfileInput) {
    const { userId } = query;

    return this.usersRepository.findOne({
      where: { id: userId },
    });
  }
}

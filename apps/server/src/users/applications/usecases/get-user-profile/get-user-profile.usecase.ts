import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { UserNotFoundException } from '@readable/users/domain/errors/users.error';
import { User } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { GetUserProfileInput } from './get-user-profile.input';

@Injectable()
export class GetUserProfileUseCase implements Usecase<GetUserProfileInput, User> {
  constructor(@InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository) {}

  async execute(query: GetUserProfileInput) {
    const { userId } = query;

    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['tags'],
    });

    if (!user) throw new UserNotFoundException(userId);

    return user;
  }
}

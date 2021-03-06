import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import {
  FollowUserFailedException,
  NoNeedFollowYourselfException,
} from '@readable/users/domain/errors/userFollow.error';
import { UserNotFoundException } from '@readable/users/domain/errors/users.error';
import { User } from '@readable/users/domain/models/user.model';
import { UserFollowsRepository } from '@readable/users/infrastructures/typeorm/repositories/userFollow.repository';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { FollowUserWithAuthInput } from './follow-user-with-auth.input';
import { FollowUserWithAuthOutput, FollowUserWithAuthOutputData } from './follow-user-with-auth.output';

@Injectable()
export class FollowUserWithAuthUsecase implements Usecase<FollowUserWithAuthInput, FollowUserWithAuthOutput> {
  constructor(
    @InjectRepository(UserFollowsRepository) private readonly userFollowsRepository: UserFollowsRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {}
  async execute(command: FollowUserWithAuthInput, followerUser: User) {
    const { followingUserId } = command;

    if (followingUserId === followerUser.id) {
      throw new NoNeedFollowYourselfException(followerUser.id);
    }

    try {
      let userFollow = await this.userFollowsRepository.findOne({
        where: {
          followingUserId,
          followerUserId: followerUser.id,
        },
        withDeleted: true,
      });

      if (!userFollow) {
        userFollow = this.userFollowsRepository.create({ followingUserId, followerUserId: followerUser.id });
      }

      await this.userFollowsRepository.save(userFollow);

      const followingUserModel = await this.usersRepository.findOne({ where: { id: followingUserId } });
      if (!followingUserModel) throw new UserNotFoundException(followingUserId);

      return new FollowUserWithAuthOutput(true, new FollowUserWithAuthOutputData(followingUserModel));
    } catch (error) {
      throw new FollowUserFailedException(followerUser.id, followingUserId, error as Error);
    }
  }
}

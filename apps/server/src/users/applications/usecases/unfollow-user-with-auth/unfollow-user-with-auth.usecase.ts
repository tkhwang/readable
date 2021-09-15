import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import {
  FollowingUserNotFoundException,
  UnfollowUserFailedException,
} from '@readable/users/domain/errors/userFollow.error';
import { UserNotFoundExcepiton } from '@readable/users/domain/errors/users.error';
import { User } from '@readable/users/domain/models/user.model';
import { UserFollowsRepository } from '@readable/users/infrastructures/typeorm/repositories/userFollow.repository';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { UnfollowUserWithAuthInput } from './unfollow-user-with-auth.input';
import { UnfollowUserWithAuthOutput, UnfollowUserWithAuthOutputData } from './unfollow-user-with-auth.output';

@Injectable()
export class UnfollowUserWithAuthUsecase implements Usecase<UnfollowUserWithAuthInput, UnfollowUserWithAuthOutput> {
  constructor(
    @InjectRepository(UserFollowsRepository) private readonly userFollowsRepository: UserFollowsRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {}

  async execute(command: UnfollowUserWithAuthInput, followerUser: User) {
    const { followingUserId } = command;

    try {
      const userFollow = await this.userFollowsRepository.findOne({
        where: { followingUserId, followerUserId: followerUser.id },
      });

      if (!userFollow) throw new FollowingUserNotFoundException(followingUserId);

      await this.userFollowsRepository.delete(userFollow.id);

      const followingUserModel = await this.usersRepository.findOne({ where: { id: followingUserId } });
      if (!followingUserModel) throw new UserNotFoundExcepiton(followingUserId);

      return new UnfollowUserWithAuthOutput(true, new UnfollowUserWithAuthOutputData(followingUserModel));
    } catch (error) {
      throw new UnfollowUserFailedException(followerUser.id, followingUserId, error as Error);
    }
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { NoNeedFollowYourselfException } from '@readable/users/domain/errors/userFollow.error';
import { UserNotFoundExcepiton } from '@readable/users/domain/errors/users.error';
import { User } from '@readable/users/domain/models/user.model';
import { UserFollowsRepository } from '@readable/users/infrastructures/typeorm/repositories/userFollow.repository';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { FollowUserWithAuthInput } from './follow-user-with-auth.input';
import { FollowUserWithAuthOutput } from './follow-user-with-auth.output';

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

    let userFollow = await this.userFollowsRepository.findOne({
      where: {
        followingUserId,
        followerUserId: followerUser.id,
      },
    });

    if (!userFollow) {
      userFollow = this.userFollowsRepository.create({ followingUserId, followerUserId: followerUser.id });
    }

    await this.userFollowsRepository.save(userFollow);

    const [followerUserModel, followingUserModel] = await Promise.all([
      this.usersRepository.findOne({ where: { id: followerUser.id } }),
      this.usersRepository.findOne({ where: { id: followingUserId } }),
    ]);

    if (!followerUserModel) throw new UserNotFoundExcepiton(followerUser.id);
    if (!followingUserModel) throw new UserNotFoundExcepiton(followingUserId);

    return new FollowUserWithAuthOutput(followerUserModel, followingUserModel);
  }
}

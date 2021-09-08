import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { NoNeedFollowYourselfException } from '@readable/users/domain/errors/userFollow.error';
import { User } from '@readable/users/domain/models/user.model';
import { UserFollowsRepository } from '@readable/users/infrastructures/typeorm/repositories/userFollow.repository';
import { FollowUserWithAuthInput } from './follow-user-with-auth.input';

@Injectable()
export class FollowUserWithAuthUsecase implements Usecase<FollowUserWithAuthInput, any> {
  constructor(
    @InjectRepository(UserFollowsRepository)
    private readonly userFollowsRepository: UserFollowsRepository
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

    return followerUser;
  }
}

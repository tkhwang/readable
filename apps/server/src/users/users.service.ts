import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserBRFO } from './domain/models/user.model';
import { UserFollowsRepository } from './infrastructures/typeorm/repositories/userFollow.repository';
import { UsersRepository } from './infrastructures/typeorm/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository,
    @InjectRepository(UserFollowsRepository) private readonly userFollowsRepository: UserFollowsRepository
  ) {}

  async findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  /*
   * Field Resolver
   */
  async getFieldIsFollowingUser(user: UserBRFO, requestUser: User) {
    const myUserFollows = await this.userFollowsRepository.find({ where: { followerUserId: requestUser.id } });
    const myUserFollowingIds = (myUserFollows ?? []).map(userFollow => userFollow.followingUserId);

    return myUserFollowingIds.includes(user.id);
  }
}

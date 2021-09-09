import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { User } from './domain/models/user.model';
import { FollowUserWithAuthUsecase } from './applications/usecases/follow-user-with-auth/follow-user-with-auth.usecase';
import { FollowUserWithAuthInput } from './applications/usecases/follow-user-with-auth/follow-user-with-auth.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserFollowsRepository } from './infrastructures/typeorm/repositories/userFollow.repository';
import { UsersRepository } from './infrastructures/typeorm/repositories/users.repository';
import { FollowUserWithAuthOutput } from './applications/usecases/follow-user-with-auth/follow-user-with-auth.output';
import { UnfollowUserWithAuthUsecase } from './applications/usecases/unfollow-user-with-auth/unfollow-user-with-auth.usecase';
import { UnfollowUserWithAuthOutput } from './applications/usecases/unfollow-user-with-auth/unfollow-user-with-auth.output';
import { UnfollowUserWithAuthInput } from './applications/usecases/unfollow-user-with-auth/unfollow-user-with-auth.input';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly followUserWithAuthUsecase: FollowUserWithAuthUsecase,
    private readonly unfollowUserWithAuthUsecase: UnfollowUserWithAuthUsecase,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository,
    @InjectRepository(UserFollowsRepository) private readonly userFollowsRepository: UserFollowsRepository
  ) {}

  /*
   *  Query (as noun)
   */
  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user: User) {
    return user;
  }

  /*
   *   Mutation (as verb)
   */
  @Mutation(returns => FollowUserWithAuthOutput)
  @UseGuards(GqlAuthGuard)
  async followUserWithAuth(
    @CurrentUser() requestUser: User,
    @Args('followUserWithAuthInput') command: FollowUserWithAuthInput
  ) {
    return this.followUserWithAuthUsecase.execute(command, requestUser);
  }

  @Mutation(returns => UnfollowUserWithAuthOutput)
  @UseGuards(GqlAuthGuard)
  async unfollowUserWithAuth(
    @CurrentUser() requestUser: User,
    @Args('unfollowUserWithAuthInput') command: UnfollowUserWithAuthInput
  ) {
    return this.unfollowUserWithAuthUsecase.execute(command, requestUser);
  }

  /*
   * Field Resolver
   */
  @ResolveField('followingUsers', returns => [User])
  async followingUsers(@Parent() user: User) {
    const userFollows = await this.userFollowsRepository.find({ where: { followingUserId: user.id } });

    return Promise.all(
      (userFollows ?? []).map(async userFollow => {
        return await this.usersRepository.findOne({ where: { id: userFollow.followerUserId } });
      })
    );
  }

  @ResolveField('followerUsers', returns => [User])
  async followerUsers(@Parent() user: User) {
    const userFollows = await this.userFollowsRepository.find({ where: { followerUserId: user.id } });

    return Promise.all(
      (userFollows ?? []).map(async userFollow => {
        return await this.usersRepository.findOne({ where: { id: userFollow.followingUserId } });
      })
    );
  }
}

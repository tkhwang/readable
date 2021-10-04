import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { User, UserBRFO } from './domain/models/user.model';
import { FollowUserWithAuthUsecase } from './applications/usecases/follow-user-with-auth/follow-user-with-auth.usecase';
import { FollowUserWithAuthInput } from './applications/usecases/follow-user-with-auth/follow-user-with-auth.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserFollowsRepository } from './infrastructures/typeorm/repositories/userFollow.repository';
import { UsersRepository } from './infrastructures/typeorm/repositories/users.repository';
import { FollowUserWithAuthOutput } from './applications/usecases/follow-user-with-auth/follow-user-with-auth.output';
import { UnfollowUserWithAuthUsecase } from './applications/usecases/unfollow-user-with-auth/unfollow-user-with-auth.usecase';
import { UnfollowUserWithAuthOutput } from './applications/usecases/unfollow-user-with-auth/unfollow-user-with-auth.output';
import { UnfollowUserWithAuthInput } from './applications/usecases/unfollow-user-with-auth/unfollow-user-with-auth.input';
import { FindManyUserBookmarksHavingUsersWithAuthInput } from './applications/usecases/find-many-userBookmarks-having-users-with-auth/find-many-userBookmarks-having-users-with-auth.input';
import { FindManyUserBookmarksHavingUsersWithAuthUsecase } from './applications/usecases/find-many-userBookmarks-having-users-with-auth/find-many-userBookmarks-having-users-with-auth.usecase';
import { FindManyFollowersWithAuthUsecase } from './applications/usecases/find-many-followers-with-auth/find-many-followers-with-auth.usecase';
import { FindManyFollowersWithAuthInput } from './applications/usecases/find-many-followers-with-auth/find-many-followers-with-auth.input';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly followUserWithAuthUsecase: FollowUserWithAuthUsecase,
    private readonly unfollowUserWithAuthUsecase: UnfollowUserWithAuthUsecase,
    private readonly findManyUserBookmarksHavingUsersWithAuthUsecase: FindManyUserBookmarksHavingUsersWithAuthUsecase,
    private readonly findManyFollowersWithAuthUsecase: FindManyFollowersWithAuthUsecase,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository,
    @InjectRepository(UserFollowsRepository) private readonly userFollowsRepository: UserFollowsRepository
  ) {}

  /*
   *  Query (as noun)
   */
  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user: User) {
    return this.usersService.findUserWithRelation(user);
  }

  @Query(returns => [User])
  @UseGuards(GqlAuthGuard)
  manyUserBookmarksHavingUsers(
    @CurrentUser() requestUser: User,
    @Args('findManyUserBookmarksHavingUsersWithAuthInput')
    findManyUserBookmarksHavingUsersWithAuthInput: FindManyUserBookmarksHavingUsersWithAuthInput
  ) {
    return this.findManyUserBookmarksHavingUsersWithAuthUsecase.execute(
      findManyUserBookmarksHavingUsersWithAuthInput,
      requestUser
    );
  }

  @Query(returns => [User])
  @UseGuards(GqlAuthGuard)
  manyFollowersHavingUsers(
    @CurrentUser() requestUser: User,
    @Args('findManyFollowersWithAuthInput') findManyFollowersWithAuthInput: FindManyFollowersWithAuthInput
  ) {
    return this.findManyFollowersWithAuthUsecase.execute(findManyFollowersWithAuthInput, requestUser);
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
  @ResolveField('followingsCount', returns => Number)
  async followingsCount(@Parent() user: UserBRFO) {
    return this.userFollowsRepository.count({ where: { followerUserId: user.id } });
  }

  @ResolveField('followersCount', returns => Number)
  async followerUsers(@Parent() user: UserBRFO) {
    return this.userFollowsRepository.count({ where: { followingUserId: user.id } });
  }

  @ResolveField('isFollowingUser', returns => Boolean)
  async isFollowingUser(@CurrentUser() requestUser: User, @Parent() user: UserBRFO) {
    return this.usersService.getFieldIsFollowingUser(user, requestUser);
  }
}

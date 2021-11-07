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
import { FindUsersHavingManyUserBookmarksWithAuthInput } from './applications/usecases/find-users-having-many-userBookmarks-with-auth/find-users-having-many-userBookmarks-with-auth.input';
import { FindManyUserBookmarksHavingUsersWithAuthUsecase } from './applications/usecases/find-users-having-many-userBookmarks-with-auth/find-users-having-many-userBookmarks-with-auth.usecase';
import { FindUsersHavingManyFollowersWithAuthUsecase } from './applications/usecases/find-users-having-many-followers-with-auth/find-users-having-many-followers-with-auth.usecase';
import { FindUsersHavingManyFollowersWithAuthInput } from './applications/usecases/find-users-having-many-followers-with-auth/find-users-having-many-followers-with-auth.input';
import { SetNickNameInput } from './applications/usecases/set-nickName/set-nickName.input';
import { GetUserProfileUseCase } from './applications/usecases/get-user-profile/get-user-profile.usecase';
import { SetNickNameUsecase } from './applications/usecases/set-nickName/set-nickName.usecase';
import { GetUserProfileInput } from './applications/usecases/get-user-profile/get-user-profile.input';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly getUserProfileUseCase: GetUserProfileUseCase,
    private readonly setNickNameUsecase: SetNickNameUsecase,
    private readonly followUserWithAuthUsecase: FollowUserWithAuthUsecase,
    private readonly unfollowUserWithAuthUsecase: UnfollowUserWithAuthUsecase,
    private readonly findManyUserBookmarksHavingUsersWithAuthUsecase: FindManyUserBookmarksHavingUsersWithAuthUsecase,
    private readonly findUsersHavingManyFollowersWithAuthUsecase: FindUsersHavingManyFollowersWithAuthUsecase,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository,
    @InjectRepository(UserFollowsRepository) private readonly userFollowsRepository: UserFollowsRepository
  ) {}

  /*
   *  Query (as noun)
   */
  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user: User) {
    const query = new GetUserProfileInput(user.id);
    return this.getUserProfileUseCase.execute(query);
  }

  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  userProfile(@Args('getUserProfileInput') getUserProfileInput: GetUserProfileInput) {
    return this.getUserProfileUseCase.execute(getUserProfileInput);
  }

  @Query(returns => [User])
  @UseGuards(GqlAuthGuard)
  async usersHavingManyUserBookmarks(
    @CurrentUser() requestUser: User,
    @Args('findUsersHavingManyUserBookmarksWithAuthInput')
    findUsersHavingManyUserBookmarksWithAuthInput: FindUsersHavingManyUserBookmarksWithAuthInput
  ) {
    return this.findManyUserBookmarksHavingUsersWithAuthUsecase.execute(
      findUsersHavingManyUserBookmarksWithAuthInput,
      requestUser
    );
  }

  @Query(returns => [User])
  @UseGuards(GqlAuthGuard)
  async usersHavingManyFollowers(
    @CurrentUser() requestUser: User,
    @Args('findUsersHavingManyFollowersWithAuthInput')
    findUsersHavingManyFollowersWithAuthInput: FindUsersHavingManyFollowersWithAuthInput
  ) {
    return this.findUsersHavingManyFollowersWithAuthUsecase.execute(
      findUsersHavingManyFollowersWithAuthInput,
      requestUser
    );
  }

  /*
   *   Mutation (as verb)
   */
  @Mutation(returns => User)
  @UseGuards(GqlAuthGuard)
  async setNickname(@CurrentUser() requestUser: User, @Args('setNickNameInput') setNickNameInput: SetNickNameInput) {
    return this.setNickNameUsecase.execute(setNickNameInput, requestUser);
  }

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

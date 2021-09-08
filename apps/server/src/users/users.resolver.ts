import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { User } from './domain/models/user.model';
import { FollowUserWithAuthUsecase } from './applications/usecases/follow-user-with-auth/follow-user-with-auth.usecase';
import { FollowUserWithAuthInput } from './applications/usecases/follow-user-with-auth/follow-user-with-auth.input';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly followUserWithAuthUsecase: FollowUserWithAuthUsecase
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
  @Mutation(returns => User)
  @UseGuards(GqlAuthGuard)
  async followerUserWithAuth(
    @CurrentUser() requestUser: User,
    @Args('followUserWithAuthInput') command: FollowUserWithAuthInput
  ) {
    return this.followUserWithAuthUsecase.execute(command, requestUser);
  }
}

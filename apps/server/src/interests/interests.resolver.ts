import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/domain/models/user.model';
import { FindOrAddInterestWithAuthInput } from './applications/usecases/find-or-add-interest/find-or-add-interest-with-auth.input';
import { FindOrAddInterestWithAuthUseCase } from './applications/usecases/find-or-add-interest/find-or-add-interest-with-auth.usecase';
import { GetMyInterestsWithAuthUsecase } from './applications/usecases/get-my-interests-with-auth/get-my-interests-with-auth.usecase';
import { Interest } from './domain/interest.model';

@Resolver(of => Interest)
export class InterestsResolver {
  constructor(
    private readonly findOrAddInterestWithAuthUseCase: FindOrAddInterestWithAuthUseCase,
    private readonly getMyInterestsWithAuthUsecase: GetMyInterestsWithAuthUsecase
  ) {}

  /*
   * Query (as noun)
   */
  @Query(returns => [Interest])
  @UseGuards(GqlAuthGuard)
  async myInterests(@CurrentUser() requestUser: User) {
    return this.getMyInterestsWithAuthUsecase.execute(requestUser);
  }

  /*
   * Mutation (as verb)
   */
  @Mutation(returns => Interest)
  @UseGuards(GqlAuthGuard)
  async findOrAddInterestWithAuth(
    @CurrentUser() requestUser: User,
    @Args('findOrAddInterestWithAuthInput') command: FindOrAddInterestWithAuthInput
  ) {
    return this.findOrAddInterestWithAuthUseCase.execute(command, requestUser);
  }
}

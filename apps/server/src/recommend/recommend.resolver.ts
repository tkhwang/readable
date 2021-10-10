import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/domain/models/user.model';
import { RecommendUserInput } from './applications/usecases/recommend-user/recommend-user.input';
import { RecommendUserUseCase } from './applications/usecases/recommend-user/recommend-user.usecase';

@Resolver(of => User)
export class RecommendResolver {
  constructor(private readonly recommendUserUseCase: RecommendUserUseCase) {}

  /*
   * Query (as noun)
   */
  @Query(returns => [User])
  @UseGuards(GqlAuthGuard)
  async recommendUsers(@CurrentUser() requestUser: User) {
    const query = new RecommendUserInput(requestUser.id);
    return this.recommendUserUseCase.execute(query);
  }
}

import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { FindOrAddInterestWithAuthInput } from './applications/usecases/find-or-add-interest/find-or-add-interest-with-auth.input';
import { FindOrAddInterestWithAuthOutput } from './applications/usecases/find-or-add-interest/find-or-add-interest-with-auth.output';
import { FindOrAddInterestWithAuthUseCase } from './applications/usecases/find-or-add-interest/find-or-add-interest-with-auth.usecase';
import { Interest } from './domain/interest.model';

@Resolver(of => Interest)
export class InterestsResolver {
  constructor(private readonly findOrAddInterestWithAuthUseCase: FindOrAddInterestWithAuthUseCase) {}

  /*
   * Mutation (as verb)
   */
  //   @Mutation(returns => FindOrAddInterestWithAuthOutput)
  @Mutation(returns => Interest)
  @UseGuards(GqlAuthGuard)
  async findOrAddInterestWithAuth(@Args('findOrAddInterestWithAuthInput') command: FindOrAddInterestWithAuthInput) {
    return this.findOrAddInterestWithAuthUseCase.execute(command);
  }
}
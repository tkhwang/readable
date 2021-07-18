import { SocialSigninInput } from '@readable/users/dto/create-user.input';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { ObjectId } from 'mongodb';
import { ObjectIdScalar } from '@readable/types/ObjectIdScalar';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '@readable/auth/graphql-auth.guards';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from './models/user.model';

@Resolver(returns => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(returns => User)
  createUser(@Args('SocialSigninInput') socialSigninInput: SocialSigninInput) {
    return this.usersService.create(socialSigninInput);
  }

  @Query(returns => [User])
  users() {
    return this.usersService.findAll();
  }

  @Query(returns => User)
  // user(@Args('id', { type: () => ObjectIdScalar }) id: string) {
  user(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user: User) {
    return user;
  }
}

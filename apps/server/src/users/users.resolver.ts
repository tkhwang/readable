import { SocialSigninInput } from '@readable/users/dto/create-user.input';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { ObjectId } from 'mongodb';
import { ObjectIdScalar } from '@readable/types/ObjectIdScalar';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('SocialSigninInput') socialSigninInput: SocialSigninInput) {
    return this.usersService.create(socialSigninInput);
  }

  @Query(() => [User])
  users() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  user(@Args('id', { type: () => ObjectIdScalar }) id: ObjectId) {
    return this.usersService.findOne(id);
  }

  @Query(returns => User)
  me() {
    //
  }
}

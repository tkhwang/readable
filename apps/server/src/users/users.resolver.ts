import { Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from './domain/user.model';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user: User) {
    return user;
  }
}

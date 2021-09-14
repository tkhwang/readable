import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/domain/models/user.model';
import { GetMyUserBookmarksWithAuth } from './applications/usecases/get-my-user-bookmarks-with-auth/get-my-user-bookmarks-with-auth.usecase';
import { UserBookmark } from './domain/model/user-bookmark.model';

@Resolver(of => UserBookmark)
export class UserBookmarkResolver {
  constructor(private readonly getMyUserBookmarksWithAuth: GetMyUserBookmarksWithAuth) {}

  /*
   * Query (as noun)
   */
  @Query(returns => [UserBookmark])
  @UseGuards(GqlAuthGuard)
  myUserBookmarks(@CurrentUser() requestUser: User) {
    return this.getMyUserBookmarksWithAuth.execute(requestUser);
  }

  /*
   * Mutation (as verb)
   */

  /*
   * Field Resolver
   */
}

import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { CommonOutput } from '@readable/common/models/common.output';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/domain/models/user.model';
import { DeleteUserBookmarkWithAuthInput } from './applications/usecases/delete-user-bookmark-with-auth/delete-user-bookmark-with-auth.input';
import { DeleteUserBookmarkWithAuthUsecase } from './applications/usecases/delete-user-bookmark-with-auth/delete-user-bookmark-with-auth.usecase';
import { GetMyUserBookmarksWithAuthUsecase } from './applications/usecases/get-my-user-bookmarks-with-auth/get-my-user-bookmarks-with-auth.usecase';
import { SyncGoogleCalendarWithAuthInput } from './applications/usecases/sync-google-calendar-with-auth/sync-google-calendar-with-auth.input';
import { SyncGoogleCalendaerWithAuthUsecase } from './applications/usecases/sync-google-calendar-with-auth/sync-google-calendar-with-auth.usecase';
import { UserBookmark } from './domain/model/user-bookmark.model';

@Resolver(of => UserBookmark)
export class UserBookmarkResolver {
  constructor(
    private readonly getMyUserBookmarksWithAuthUsecase: GetMyUserBookmarksWithAuthUsecase,
    private readonly deleteUserBookmarkWithAuthUsecase: DeleteUserBookmarkWithAuthUsecase,
    private readonly syncGoogleCalendaerWithAuthUsecase: SyncGoogleCalendaerWithAuthUsecase
  ) {}

  /*
   * Query (as noun)
   */
  @Query(returns => [UserBookmark])
  @UseGuards(GqlAuthGuard)
  myUserBookmarks(@CurrentUser() requestUser: User) {
    return this.getMyUserBookmarksWithAuthUsecase.execute(requestUser);
  }

  /*
   * Mutation (as verb)
   */
  @Mutation(returns => CommonOutput)
  @UseGuards(GqlAuthGuard)
  async deleteUserBookmarkWithAuth(
    @CurrentUser() requestUser: User,
    @Args('deleteUserBookmarkWithAuthInput') command: DeleteUserBookmarkWithAuthInput
  ) {
    return this.deleteUserBookmarkWithAuthUsecase.execute(command, requestUser);
  }

  @Mutation(returns => CommonOutput)
  @UseGuards(GqlAuthGuard)
  async syncGoogleCalendarWithAuth(
    @CurrentUser() requestUser: User,
    @Args('syncGoogleCalendarWithAuthInput') command: SyncGoogleCalendarWithAuthInput
  ) {
    return this.syncGoogleCalendaerWithAuthUsecase.execute(command, requestUser);
  }

  /*
   * Field Resolver
   */
}

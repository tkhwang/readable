import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { CommonOutput } from '@readable/common/models/common.output';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/domain/models/user.model';
import { DeleteUserBookmarkWithAuthInput } from './applications/usecases/delete-user-bookmark-with-auth/delete-user-bookmark-with-auth.input';
import { DeleteUserBookmarkWithAuthUsecase } from './applications/usecases/delete-user-bookmark-with-auth/delete-user-bookmark-with-auth.usecase';
import { FindMyUserBookmarksGroupedByInterestsInput } from './applications/usecases/find-my-userBookmarks-grouped-by-interests/find-my-userBookmarks-grouped-by-interests.input';
import { FindMyUserBookmarksGroupedByInterestsOutput } from './applications/usecases/find-my-userBookmarks-grouped-by-interests/find-my-userBookmarks-grouped-by-interests.output';
import { FindMyUserBookmarksGroupedByInterestsUsecase } from './applications/usecases/find-my-userBookmarks-grouped-by-interests/find-my-userBookmarks-grouped-by-interests.usecase';
import { GetMyUserBookmarksWithAuthUsecase } from './applications/usecases/get-my-user-bookmarks-with-auth/get-my-user-bookmarks-with-auth.usecase';
import { SyncGoogleCalendarWithAuthInput } from './applications/usecases/sync-google-calendar-with-auth/sync-google-calendar-with-auth.input';
import { SyncGoogleCalendaerWithAuthUsecase } from './applications/usecases/sync-google-calendar-with-auth/sync-google-calendar-with-auth.usecase';
import { UserBookmark, UserBookmarkBRFO } from './domain/model/user-bookmark.model';
import { UserBookmarkService } from './user-bookmark.service';

@Resolver(of => UserBookmark)
export class UserBookmarkResolver {
  constructor(
    private readonly userBookmarkService: UserBookmarkService,
    private readonly getMyUserBookmarksWithAuthUsecase: GetMyUserBookmarksWithAuthUsecase,
    private readonly deleteUserBookmarkWithAuthUsecase: DeleteUserBookmarkWithAuthUsecase,
    private readonly syncGoogleCalendaerWithAuthUsecase: SyncGoogleCalendaerWithAuthUsecase,
    private readonly findMyUserBookmarksGroupedByInterestsUsecase: FindMyUserBookmarksGroupedByInterestsUsecase
  ) {}

  /*
   * Query (as noun)
   */
  @Query(returns => [UserBookmark])
  @UseGuards(GqlAuthGuard)
  myUserBookmarks(@CurrentUser() requestUser: User) {
    return this.getMyUserBookmarksWithAuthUsecase.execute(requestUser);
  }

  @Query(returns => [FindMyUserBookmarksGroupedByInterestsOutput])
  @UseGuards(GqlAuthGuard)
  async myUserBookmarksGroupedByInterests(@CurrentUser() requestUser: User) {
    const query = new FindMyUserBookmarksGroupedByInterestsInput(requestUser.id);

    return this.findMyUserBookmarksGroupedByInterestsUsecase.execute(query);
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
  @ResolveField('bookmarkers', returns => [User])
  async bookmarkers(@Parent() userBookmark: UserBookmarkBRFO) {
    return this.userBookmarkService.getFieldBookmarkers(userBookmark);
  }

  @ResolveField('bookmarkersCount', returns => Number)
  async bookmarkersCount(@Parent() userBookmark: UserBookmarkBRFO) {
    return this.userBookmarkService.getFieldBookmarkersCount(userBookmark);
  }

  @ResolveField('readers', returns => [User])
  async readers(@Parent() userBookmark: UserBookmarkBRFO) {
    return this.userBookmarkService.getFieldReaders(userBookmark);
  }

  @ResolveField('readersCount', returns => Number)
  async readersCount(@Parent() userBookmark: UserBookmarkBRFO) {
    return this.userBookmarkService.getFieldReadersCount(userBookmark);
  }
}

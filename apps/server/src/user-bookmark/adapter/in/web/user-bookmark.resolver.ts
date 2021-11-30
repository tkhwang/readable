import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { CommonOutput } from '@readable/common/models/common.output';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { UserBookmark, UserBookmarkBRFO } from '@readable/user-bookmark/domain/user-bookmark.model';
import { User } from '@readable/users/domain/models/user.model';
import { DeleteUserBookmarkWithAuthInput } from '../../../application/port/in/usecases/delete-user-bookmark-with-auth/delete-user-bookmark-with-auth.input';
import { DeleteUserBookmarkWithAuthUsecase } from '../../../application/port/in/usecases/delete-user-bookmark-with-auth/delete-user-bookmark-with-auth.usecase';
import { FindMyUserBookmarksGroupedByInterestsInput } from '../../../application/port/in/usecases/find-my-userBookmarks-grouped-by-interests/find-my-userBookmarks-grouped-by-interests.input';
import { FindMyUserBookmarksGroupedByInterestsOutput } from '../../../application/port/in/usecases/find-my-userBookmarks-grouped-by-interests/find-my-userBookmarks-grouped-by-interests.output';
import { FindMyUserBookmarksGroupedByInterestsUsecase } from '../../../application/port/in/usecases/find-my-userBookmarks-grouped-by-interests/find-my-userBookmarks-grouped-by-interests.usecase';
import { GetMyUserBookmarksWithAuthUsecase } from '../../../application/port/in/usecases/get-my-user-bookmarks-with-auth/get-my-user-bookmarks-with-auth.usecase';
import { SyncGoogleCalendarWithAuthInput } from '../../../application/port/in/usecases/sync-google-calendar-with-auth/sync-google-calendar-with-auth.input';
import { SyncGoogleCalendaerWithAuthUsecase } from '../../../application/port/in/usecases/sync-google-calendar-with-auth/sync-google-calendar-with-auth.usecase';
import { UserBookmarkService } from '../../../application/user-bookmark.service';

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
  async myUserBookmarksGroupedByInterests(
    @CurrentUser() requestUser: User,
    @Args('findMyUserBookmarksGroupedByInterestsInput')
    findMyUserBookmarksGroupedByInterestsInput: FindMyUserBookmarksGroupedByInterestsInput
  ) {
    return this.findMyUserBookmarksGroupedByInterestsUsecase.execute(
      findMyUserBookmarksGroupedByInterestsInput,
      requestUser
    );
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
  @ResolveField('user', returns => User)
  async user(@Parent() userBookmark: UserBookmarkBRFO) {
    return userBookmark['user'] && userBookmark['user']?.length > 0 ? userBookmark['user'][0] : null;
  }

  @ResolveField('bookmarkers', returns => [User])
  async bookmarkers(@Parent() userBookmark: UserBookmarkBRFO) {
    //TODO(Teddy)
    // return this.userBookmarkService.getFieldBookmarkers(userBookmark);
    return [];
  }

  @ResolveField('bookmarkersCount', returns => Number)
  async bookmarkersCount(@Parent() userBookmark: UserBookmarkBRFO) {
    //TODO(Teddy)
    // return this.userBookmarkService.getFieldBookmarkersCount(userBookmark);
    return 0;
  }

  @ResolveField('readers', returns => [User])
  async readers(@Parent() userBookmark: UserBookmarkBRFO) {
    //TODO(Teddy)
    // return this.userBookmarkService.getFieldReaders(userBookmark);
    return [];
  }

  @ResolveField('readersCount', returns => Number)
  async readersCount(@Parent() userBookmark: UserBookmarkBRFO) {
    //TODO(Teddy)
    // return this.userBookmarkService.getFieldReadersCount(userBookmark);
    return 0;
  }
}

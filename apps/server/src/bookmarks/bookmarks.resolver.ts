import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, ResolveField, Resolver, Root } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/domain/user.model';
import { Bookmark, BookmarkBRFO } from './domain/models/bookmark.model';
import { AddBookMarkWithAuthInput } from './applications/usecases/add-bookmark-with-auth/add-bookmark-with-auth.input';
import { AddBookmarkWithAuthUsecase } from './applications/usecases/add-bookmark-with-auth/add-bookmark-with-auth.usecase';
import { GetMyBookmarksUsecase } from './applications/usecases/get-my-bookmarks/get-my-bookmarks.usecase';
import { DeleteBookmarkWithAuthUsecse } from './applications/usecases/delete-bookmark-with-auth/delete-bookmark-with-auth.usecase';
import { DeleteBookmarkWithAuthInput } from './applications/usecases/delete-bookmark-with-auth/delete-bookmark-with-auth.input';
import { CommonOutput } from '@readable/common/models/common.output';
import { BookmarksService } from './bookmarks.service';

@Resolver(of => Bookmark)
export class BookmarksResolver {
  constructor(
    private readonly addBookmarkWithAuthUsecase: AddBookmarkWithAuthUsecase,
    private readonly getMyBookmarksUsecase: GetMyBookmarksUsecase,
    private readonly deleteBookmarkWithAuthUsecse: DeleteBookmarkWithAuthUsecse,
    private readonly bookmarksService: BookmarksService
  ) {}

  /*
   * Query (as noun)
   */
  @Query(returns => [Bookmark])
  @UseGuards(GqlAuthGuard)
  myBookmarks(@CurrentUser() requestUser: User) {
    return this.getMyBookmarksUsecase.execute(requestUser);
  }

  /*
   * Mutation (as verb)
   */

  @Mutation(returns => Bookmark)
  @UseGuards(GqlAuthGuard)
  addBookmarkWithAuth(
    @CurrentUser() requestUser: User,
    @Args('addBookMarkWithAuthInput') command: AddBookMarkWithAuthInput
  ) {
    return this.addBookmarkWithAuthUsecase.execute(command, requestUser);
  }

  @Mutation(returns => CommonOutput)
  @UseGuards(GqlAuthGuard)
  deleteBookmarkWithAuth(
    @CurrentUser() requestUser: User,
    @Args('deleteBookmarkWithAuthInput') command: DeleteBookmarkWithAuthInput
  ) {
    return this.deleteBookmarkWithAuthUsecse.execute(command, requestUser);
  }

  /*
   * Field Resolver
   */
  @ResolveField()
  async collector(@Root() bookmark: BookmarkBRFO) {
    return this.bookmarksService.getFieldCollector(bookmark);
  }
}

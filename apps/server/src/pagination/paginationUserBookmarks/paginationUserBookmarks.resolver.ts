import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/domain/models/user.model';
import { GetPaginationUserBookmarksInput } from './applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.input';
import { GetPaginationUserBookmarksUsecase } from './applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.usecase';
import { PaginationUserBookmarkBRFOs, PaginationUserBookmarks } from './domain/models/paginationUserBookmarks.model';

@Resolver(of => PaginationUserBookmarks)
export class PaginationUserBookmarksResolver {
  constructor(private readonly getPaginationUserBookmarksUsecase: GetPaginationUserBookmarksUsecase) {}

  /*
   * Query (as noun)
   */
  @Query(returns => PaginationUserBookmarks, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async paginationUserBookmarks(
    @CurrentUser() requestUser: User,
    @Args('getPaginationUserBookmarksInput') getPaginationUserBookmarksInput: GetPaginationUserBookmarksInput
  ): Promise<PaginationUserBookmarkBRFOs | null> {
    return this.getPaginationUserBookmarksUsecase.execute(getPaginationUserBookmarksInput, requestUser);
  }
}

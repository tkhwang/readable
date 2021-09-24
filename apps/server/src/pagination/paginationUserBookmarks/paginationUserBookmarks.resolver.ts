import { UseGuards } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { PaginationOrder, PaginationOrderBy } from '@readable/common/pagination/paginationCursor';
import { PaginationCursorInput } from '@readable/common/pagination/paginationCursor.input';
import { PaginationCursorScalar } from '@readable/common/pagination/paginationCursorScalar';
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
    @Args('orderBy', { type: () => PaginationOrderBy, defaultValue: PaginationOrderBy.LATEST })
    orderBy?: PaginationOrderBy,
    @Args('order', { type: () => PaginationOrder, defaultValue: PaginationOrder.DESC })
    order?: PaginationOrder,
    @Args('first', { type: () => Int, defaultValue: 10 })
    first?: number,
    @Args('after', { type: () => PaginationCursorScalar, nullable: true })
    after?: PaginationCursorInput,
    //
    @Args('tagId', { type: () => String, nullable: true }) tagId?: string,
    @Args('interestId', { type: () => String, nullable: true }) interestId?: string,
    @Args('myUserBookmark', { type: () => Boolean, nullable: true }) myUserBookmark?: boolean
  ): Promise<PaginationUserBookmarkBRFOs | null> {
    const query = new GetPaginationUserBookmarksInput();
    if (orderBy) query.orderBy = orderBy;
    if (order) query.order = order;
    if (first) query.first = first;
    if (after) query.after = after;
    if (tagId) query.tagId = tagId;
    if (interestId) query.interestId = interestId;
    if (myUserBookmark) query.myUserBookmark = myUserBookmark;

    return this.getPaginationUserBookmarksUsecase.execute(query, requestUser);
  }
}

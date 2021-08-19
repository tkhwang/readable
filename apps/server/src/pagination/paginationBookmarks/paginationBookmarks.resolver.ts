import { UseGuards } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { PaginationCursor, PaginationOrder, PaginationOrderBy } from '@readable/common/pagination/paginationCursor';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/domain/models/user.model';
import { GetPaginationBookmarksInput } from './applications/usecases/get-pagination-bookmarks/get-pagination-bookmarks.input';
import { GetPaginationBookmarksUsecase } from './applications/usecases/get-pagination-bookmarks/get-pagination-bookmarks.usecase';
import { PaginationBookmarkBRFOs, PaginationBookmarks } from './domain/models/paginationBookmarks.type';

@Resolver(of => PaginationBookmarks)
export class PaginationBookmarksResolver {
  constructor(private readonly getPaginationBookmarksUsecase: GetPaginationBookmarksUsecase) {}

  /*
   * Query (as noun)
   */
  @Query(returns => PaginationBookmarks, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async paginationBookmarks(
    @CurrentUser() requestUser: User,
    @Args('orderBy', { type: () => PaginationOrderBy, defaultValue: PaginationOrderBy.LATEST })
    orderBy?: PaginationOrderBy,
    @Args('order', { type: () => PaginationOrder, defaultValue: PaginationOrder.DESC })
    order?: PaginationOrder,
    @Args('first', { type: () => Int, defaultValue: 10 })
    first?: number,
    @Args('after', { type: () => PaginationCursor, nullable: true })
    after?: PaginationCursor
  ): Promise<PaginationBookmarkBRFOs | null> {
    const query = new GetPaginationBookmarksInput();
    if (orderBy) query.orderBy = orderBy;
    if (order) query.order = order;
    if (first) query.first = first;
    if (after) query.after = after;

    return this.getPaginationBookmarksUsecase.execute(query, requestUser);
  }
}

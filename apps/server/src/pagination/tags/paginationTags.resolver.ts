import { UseGuards } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { PaginationOrder, PaginationOrderBy } from '@readable/common/pagination/paginationCursor';
import { PaginationCursorInput } from '@readable/common/pagination/paginationCursor.input';
import { PaginationCursorScalar } from '@readable/common/pagination/paginationCursorScalar';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/domain/models/user.model';
import { GetPaginationTagsInput } from './applications/usecases/get-pagination-tags/get-pagination-tags.input';
import { GetPaginationTagsUsecase } from './applications/usecases/get-pagination-tags/get-pagination-tags.usecase';
import { PaginationTagBRFOs, PaginationTags } from './domain/models/paginationTags.model';

@Resolver(of => PaginationTags)
export class PaginationTagsResolver {
  constructor(private readonly getPaginationTagsUsecase: GetPaginationTagsUsecase) {}

  /*
   * Query (as noun)
   */

  @Query(returns => PaginationTags, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async paginationTags(
    @CurrentUser() requestUser: User,
    @Args('orderBy', { type: () => PaginationOrderBy, defaultValue: PaginationOrderBy.LATEST })
    orderBy?: PaginationOrderBy,
    @Args('order', { type: () => PaginationOrder, defaultValue: PaginationOrder.DESC })
    order?: PaginationOrder,
    @Args('first', { type: () => Int, defaultValue: 10 })
    first?: number,
    @Args('after', { type: () => PaginationCursorScalar, nullable: true })
    after?: PaginationCursorInput
  ): Promise<PaginationTagBRFOs | null> {
    const query = new GetPaginationTagsInput();
    if (orderBy) query.orderBy = orderBy;
    if (order) query.order = order;
    if (first) query.first = first;
    if (after) query.after = after;

    return this.getPaginationTagsUsecase.execute(query, requestUser);
  }
}

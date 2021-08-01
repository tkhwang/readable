import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
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
    @Args('getPaginationBookmarksInput') query: GetPaginationBookmarksInput
  ): Promise<PaginationBookmarkBRFOs | null> {
    console.log('TCL: PaginationBookmarksResolver -> constructor -> requestUser', requestUser);
    return this.getPaginationBookmarksUsecase.execute(query, requestUser);
  }
}

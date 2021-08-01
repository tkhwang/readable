import { Query, UseGuards } from '@nestjs/common';
import { Args, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { Bookmark } from '@readable/bookmarks/domain/models/bookmark.model';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/domain/user.model';
import { GetPaginationBookmarksInput } from './applications/usecases/get-pagination-bookmarks/get-pagination-bookmarks.input';
import { GetPaginationBookmarksUsecase } from './applications/usecases/get-pagination-bookmarks/get-pagination-bookmarks.usecase';
import { PaginationBookmarks } from './domain/paginationBookmarks.type';

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
  ): Promise<PaginationBookmarks | null> {
    return this.getPaginationBookmarksUsecase.execute(query, requestUser);
  }
}

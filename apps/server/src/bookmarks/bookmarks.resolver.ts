import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/domain/user.model';
import { Bookmark } from './models/bookmark.model';
import { AddBookMarkWithAuthInput } from './usecases/add-bookmark-with-auth/add-bookmark-with-auth.input';
import { AddBookmarkWithAuthUsecase } from './usecases/add-bookmark-with-auth/add-bookmark-with-auth.usecase';
import { GetMyBookmarksUsecase } from './usecases/get-my-bookmarks/get-my-bookmarks.usecase';

@Resolver(of => Bookmark)
export class BookmarksResolver {
  constructor(
    private readonly addBookmarkWithAuthUsecase: AddBookmarkWithAuthUsecase,
    private readonly getMyBookmarksUsecase: GetMyBookmarksUsecase
  ) {}

  @Query(returns => [Bookmark])
  @UseGuards(GqlAuthGuard)
  myBookmarks(@CurrentUser() requestUser: User) {
    return this.getMyBookmarksUsecase.execute(requestUser);
  }

  @Mutation(returns => Bookmark)
  @UseGuards(GqlAuthGuard)
  addBookmarkWithAuth(
    @CurrentUser() requestUser: User,
    @Args('addBookMarkWithAuthInput') command: AddBookMarkWithAuthInput
  ) {
    return this.addBookmarkWithAuthUsecase.execute(command, requestUser);
  }
}

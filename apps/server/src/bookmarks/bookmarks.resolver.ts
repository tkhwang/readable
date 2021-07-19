import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/graphql-auth.guards';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/models/user.model';
import { Bookmark } from './models/bookmark.model';
import { AddBookMarkWithAuthInput } from './usecases/add-bookmark-with-auth/add-bookmark-with-auth.input';
import { AddBookmarkWithAuthUsecase } from './usecases/add-bookmark-with-auth/add-bookmark-with-auth.usecase';
import { GetBookmarksUsecase } from './usecases/get-bookmarks/get-bookmarks.usecase';

@Resolver(of => Bookmark)
export class BookmarksResolver {
  constructor(
    private readonly getBookmarksUsecase: GetBookmarksUsecase,
    private readonly addBookmarkWithAuthUsecase: AddBookmarkWithAuthUsecase
  ) {}

  @Query(returns => [Bookmark], { nullable: true })
  bookmarks() {
    return this.getBookmarksUsecase.execute();
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

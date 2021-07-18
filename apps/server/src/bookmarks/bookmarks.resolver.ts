import { Query, Resolver } from '@nestjs/graphql';
import { Bookmark } from './models/bookmark.model';
import { GetBookmarksUsecase } from './usecases/get-bookmarks/get-bookmarks.usecase';

@Resolver(of => Bookmark)
export class BookmarksResolver {
  constructor(private readonly getBookmarksUsecase: GetBookmarksUsecase) {}

  @Query(returns => [Bookmark], { nullable: true })
  bookmarks() {
    return this.getBookmarksUsecase.execute();
  }
}

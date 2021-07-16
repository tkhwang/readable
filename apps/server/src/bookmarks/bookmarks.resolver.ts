import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/graphql-auth.guards';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/entities/user.entity';
import { Bookmark } from './models/bookmark.entity';
import { GetUrlInfoInput } from './usecases/get-url-info/get-url-info.input';
import { GetUrlInfoUsecase } from './usecases/get-url-info/get-url-info.usecase';

@Resolver()
export class BookmarksResolver {
  constructor(private readonly getUrlInfoUsecase: GetUrlInfoUsecase) {}

  @Query(retruns => Bookmark, { nullable: true, description: 'Get ogtag infrom from URL' })
  // @UseGuards(GqlAuthGuard)
  urlInfo(
    // @CurrentUser() user: User,
    @Args('getUrlInfoInput') getUrlInfoInput: GetUrlInfoInput
  ) {
    return this.getUrlInfoUsecase.execute(getUrlInfoInput);
  }
}

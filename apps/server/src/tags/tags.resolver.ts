import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/domain/models/user.model';
import { FollowTagWithAuthInput } from './applications/usercases/follow-tag-with-auth/follow-tag-with-auth.input';
import { FollowTagWithAuthOutput } from './applications/usercases/follow-tag-with-auth/follow-tag-with-auth.output';
import { FollowTagWithAuthUsecase } from './applications/usercases/follow-tag-with-auth/follow-tag-with-auth.usecase';
import { GetPopularTagsWithAuthInput } from './applications/usercases/get-popular-tags-with-auth/get-popular-tags-with-auth.input';
import { GetPopularTagsWithAuthUsecase } from './applications/usercases/get-popular-tags-with-auth/get-popular-tags-with-auth.usecase';
import { Tag, TagBRFO } from './domain/models/tag.model';
import { TagsService } from './tags.service';

@Resolver(of => Tag)
export class TagsResolver {
  constructor(
    private readonly tagsService: TagsService,
    private readonly followTagWithAuthUsecase: FollowTagWithAuthUsecase,
    private readonly getPopularTagsWithAuthUsecase: GetPopularTagsWithAuthUsecase
  ) {}

  /*
   * Query (as noun)
   */
  @Query(type => [Tag], { nullable: true })
  @UseGuards(GqlAuthGuard)
  async popularTags(
    @CurrentUser() requestUser: User,
    @Args('getPopularTagsWithAuthInput') getPopularTagsWithAuthInput: GetPopularTagsWithAuthInput
  ) {
    return this.getPopularTagsWithAuthUsecase.execute(getPopularTagsWithAuthInput, requestUser);
  }

  /*
   * Mutation (as verb)
   */
  @Mutation(returns => FollowTagWithAuthOutput)
  @UseGuards(GqlAuthGuard)
  async followTagWithAuth(
    @CurrentUser() requestUser: User,
    @Args('followTagWithAuthInput') followTagWithAuthInput: FollowTagWithAuthInput
  ) {
    return this.followTagWithAuthUsecase.execute(followTagWithAuthInput, requestUser);
  }

  /*
   * Field Resolver
   */
  @ResolveField('followersCount', returns => Number)
  async followersCount(@Parent() tag: TagBRFO) {
    return this.tagsService.getFieldFollowersCount(tag);
  }

  @ResolveField('userBookmarksCount', returns => Number)
  async userBookmarksCount(@Parent() tag: TagBRFO) {
    return this.tagsService.getFieldUserBookmarksCount(tag);
  }

  @UseGuards(GqlAuthGuard)
  @ResolveField('isFollowingTag', returns => Boolean)
  async isFollowingTag(@CurrentUser() requestUser: User, @Parent() tag: TagBRFO) {
    return this.tagsService.getFieldIsFollowingTag(tag, requestUser);
  }
}

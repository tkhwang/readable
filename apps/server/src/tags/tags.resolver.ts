import { UseGuards } from '@nestjs/common';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@readable/auth/domain/graphql-auth.guards';
import { CurrentUser } from '@readable/middleware/current-user.decorator';
import { User } from '@readable/users/domain/models/user.model';
import { Tag, TagBRFO } from './domain/models/tag.model';
import { TagsService } from './tags.service';

@Resolver(of => Tag)
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

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
  @ResolveField('isFollowedTag', returns => Boolean)
  async isFollowedTag(@CurrentUser() requestUser: User, @Parent() tag: TagBRFO) {
    return this.tagsService.getFieldIsFollowedTag(tag, requestUser);
  }
}

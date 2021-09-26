import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
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
}

import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { User } from '@readable/users/domain/models/user.model';
import { RecommendUserBookmarksByTagsInput } from './recommend-user-bookmarks-by-tags.input';
import { RecommendUserBookmarksByTagsOutput } from './recommend-user-bookmarks-by-tags.output';

export class RecommendUserBookmarksByTagsUsecase
  implements Usecase<RecommendUserBookmarksByTagsInput, RecommendUserBookmarksByTagsOutput[]> {
  constructor(
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository
  ) {}

  async execute(query: RecommendUserBookmarksByTagsInput, requestUser: User) {
    const { tags, urlHash, howMany } = query;

    const tagRecommendationsObject = await tags.reduce(async (accP, cur) => {
      const tagsHavingSameNormalizedTag = await this.tagsRepository.find({
        where: { normalizedTag: cur.normalizedTag },
      });

      const recommendedUserBookmarks = await this.userBookmarkRepository.findRecommendedUserBookmarksByTag(
        urlHash,
        cur,
        tagsHavingSameNormalizedTag ?? [],
        howMany,
        requestUser
      );

      const acc = await accP;
      return { ...acc, [cur.tag]: recommendedUserBookmarks };
    }, {});

    const tagRecommendationsArray = Object.keys(tagRecommendationsObject).map(tag => {
      const recommendedUserBookmarks = tagRecommendationsObject[tag];
      return { tag, recommendedUserBookmarks };
    });

    return tagRecommendationsArray.filter(tagRecommendation => tagRecommendation.recommendedUserBookmarks.length > 0);
  }
}

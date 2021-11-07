import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationCursor } from '@readable/common/pagination/paginationCursor';
import { TagNotFoundException } from '@readable/tags/domain/erros/tag.error';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { TagsUtilityService } from '@readable/tags/tags-utility.service';
import { TagsService } from '@readable/tags/tags.service';
import { UserBookmark } from '@readable/user-bookmark/infrastructures/typeorm/entities/user-bookmark.entity';
import { User as UserModel } from '@readable/users/domain/models/user.model';
import { User as UserEntity } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { PaginationQueryCriteriaType } from './pagination.model';
import { GetPaginationTagsInput } from './tags/applications/usecases/get-pagination-tags/get-pagination-tags.input';
import { PaginationTagsFilter } from './tags/domain/models/paginationTags.filter';
import { GetPaginationRecommendedUserBookmarksByTagsInput } from './userBookmarks/applications/usecases/get-pagination-recommended-user-bookmarks-by-tags/get-pagination-recommended-user-bookmarks-by-tags.input';
import { GetPaginationUserBookmarksInput } from './userBookmarks/applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.input';
import { PaginationWrongCursorException } from './userBookmarks/domain/errors/paginationUserBookmarks.errors';
import { PaginationUserBookmarksFilter } from './userBookmarks/domain/models/paginationUserBookmarks.filter';

@Injectable()
export class PaginationService {
  constructor(
    private readonly tagsService: TagsService,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository
  ) {}

  /**
   * Generate RelayStylePagination query result by taking queryFunction
   */
  async generatePaginationFromQuery(
    query: GetPaginationUserBookmarksInput | GetPaginationTagsInput,
    filter: PaginationUserBookmarksFilter | PaginationTagsFilter,
    requestUser: UserModel | UserEntity | undefined,
    queryFunction: (
      query:
        | GetPaginationUserBookmarksInput
        | GetPaginationTagsInput
        | GetPaginationRecommendedUserBookmarksByTagsInput,
      filter: PaginationUserBookmarksFilter | PaginationTagsFilter,
      requestUser: UserModel | UserEntity | undefined
    ) => Promise<UserBookmark[] | Tag[]>
  ) {
    const { first, after, order, orderBy } = query;
    let entities = await queryFunction(query, filter, requestUser);

    if (!entities || !entities.length) return null;

    const hasNextPage = entities.length > first;

    if (hasNextPage) {
      entities = entities.slice(0, entities.length - 1);
    }

    const edges = entities.map(entity => ({
      cursor: new PaginationCursor(orderBy, order, entity.createdAt, entity?.tagCount),
      node: entity,
    }));

    return {
      pageInfo: {
        hasNextPage,
        endCursor: edges[edges.length - 1].cursor,
      },
      edges,
    };
  }

  private generateCriteria(query: GetPaginationUserBookmarksInput): PaginationQueryCriteriaType {
    const { first, after, order, orderBy } = query;

    const criteria = {
      createdAt: new Date(),
    };

    if (after) {
      const { createdAt: afterCreatedAt, order: orderInCursor, orderBy: orderByInCursor } = after;

      if (!(order === orderInCursor && orderBy === orderByInCursor)) {
        throw new PaginationWrongCursorException(after, orderBy, order);
      }

      criteria['createdAt'] = afterCreatedAt;
    }

    return criteria;
  }

  async generateTagsFilter(query: GetPaginationTagsInput) {
    const filter: PaginationTagsFilter = {};

    return filter;
  }

  async generateUserBookmarksFilter(query: GetPaginationUserBookmarksInput) {
    const { tagId, interestId, myUserBookmark, myReadUserBookmark, userId } = query;

    const filter: PaginationUserBookmarksFilter = {};

    if (tagId) {
      const tag = await this.tagsRepository.findOne(tagId);
      if (!tag) throw new TagNotFoundException(tagId);

      filter.normalizedTag = TagsUtilityService.normalizeTag(tag.tag);
    }

    if (interestId) {
      filter.interestId = interestId;
    }

    if (myUserBookmark) {
      filter.myUserBookmark = myUserBookmark;
    }

    if (myReadUserBookmark) {
      filter.myReadUserBookmark = myReadUserBookmark;
    }

    if (userId) {
      filter.userId = userId;
    }

    return filter;
  }
}

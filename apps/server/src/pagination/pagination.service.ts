import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationCursor } from '@readable/common/pagination/paginationCursor';
import { TagNotFoundExcepiton } from '@readable/tags/domain/erros/tag.error';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { TagsUtilityService } from '@readable/tags/tags-utility.service';
import { TagsService } from '@readable/tags/tags.service';
import { UserBookmark } from '@readable/user-bookmark/infrastructures/typeorm/entities/user-bookmark.entity';
import { User } from '@readable/users/domain/models/user.model';
import { PaginationQueryCriteriaType } from './pagination.model';
import { GetPaginationTagsInput } from './tags/applications/usecases/get-pagination-tags/get-pagination-tags.input';
import { PaginationTagsFilter } from './tags/domain/models/paginationTags.filter';
import { GetPaginationUserBookmarksInput } from './userBookmarks/applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.input';
import { PaginationWrongCursorExceptoin } from './userBookmarks/domain/errors/paginationUserBookmarks.errors';
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
    requestUser: User,
    queryFunction: (
      query: GetPaginationUserBookmarksInput | GetPaginationTagsInput,
      filter: PaginationUserBookmarksFilter | PaginationTagsFilter,
      criteria: PaginationQueryCriteriaType,
      requestUser: User
    ) => Promise<UserBookmark[] | Tag[]>
  ) {
    const { first, after, order, orderBy } = query;
    const criteria = this.generateCriteria(query);

    let entities = await queryFunction(query, filter, criteria, requestUser);
    if (!entities || !entities.length) return null;

    const hasNextPage = entities.length > first - 1;

    if (hasNextPage) {
      entities = entities.slice(0, entities.length - 1);
    }

    const edges = entities.map(entity => ({
      cursor: new PaginationCursor(orderBy, order, entity.createdAt),
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
        throw new PaginationWrongCursorExceptoin(after, orderBy, order);
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
    const { tagId, interestId, myUserBookmark, userId } = query;

    const filter: PaginationUserBookmarksFilter = {};

    if (tagId) {
      const tag = await this.tagsRepository.findOne(tagId);
      if (!tag) throw new TagNotFoundExcepiton(tagId);

      filter.normalizedTag = TagsUtilityService.normalizeTag(tag.tag);
    }

    if (interestId) {
      filter.interestId = interestId;
    }

    if (myUserBookmark) {
      filter.myUserBookmark = myUserBookmark;
    }

    if (userId) {
      filter.userId = userId;
    }

    return filter;
  }
}

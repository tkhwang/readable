import { Injectable } from '@nestjs/common';
import { PaginationCursor } from '@readable/common/pagination/paginationCursor';
import { UserBookmark } from '@readable/user-bookmark/infrastructures/typeorm/entities/user-bookmark.entity';
import { User } from '@readable/users/domain/models/user.model';
import { GetPaginationUserBookmarksInput } from './applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.input';
import { PaginationWrongCursorExceptoin } from './domain/errors/paginationUserBookmarks.errors';
import { PaginationUserBookmarksFilter } from './domain/models/paginationUserBookmarks.filter';
import { PaginationQueryCriteriaType } from './domain/models/paginationUserBookmarks.model';

@Injectable()
export class PaginationUserBookmarksService {
  /**
   * Generate RelayStylePagination query result by taking queryFunction
   *
   * @param {GetPaginationUserBookmarksInput} query
   * @param {PaginationUserBookmarksFilter} filter
   * @param {User} requestUser
   * @param {(
   *       query: GetPaginationUserBookmarksInput,
   *       filter: PaginationUserBookmarksFilter,
   *       criteria: PaginationQueryCriteriaType,
   *       requestUser: User
   *     ) => Promise<UserBookmark[]>} queryFunction
   * @return {*}
   * @memberof PaginationUserBookmarksService
   */
  async generatePaginationFromQuery(
    query: GetPaginationUserBookmarksInput,
    filter: PaginationUserBookmarksFilter,
    requestUser: User,
    queryFunction: (
      query: GetPaginationUserBookmarksInput,
      filter: PaginationUserBookmarksFilter,
      criteria: PaginationQueryCriteriaType,
      requestUser: User
    ) => Promise<UserBookmark[]>
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
}

import { Injectable } from '@nestjs/common';
import { GetPaginationUserBookmarksInput } from '@readable/pagination/userBookmarks/applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.input';
import { PaginationWrongCursorException } from '@readable/pagination/userBookmarks/domain/errors/paginationUserBookmarks.errors';
import { PaginationUserBookmarksFilter } from '@readable/pagination/userBookmarks/domain/models/paginationUserBookmarks.filter';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { User } from '@readable/users/domain/models/user.model';
import { EntityRepository, Repository } from 'typeorm';
import { UserBookmark } from '../entities/user-bookmark.entity';

@Injectable()
@EntityRepository(UserBookmark)
export class UserBookmarkRepository extends Repository<UserBookmark> {
  async findUserBookmarksByUrlInfoIds(urlInfoIds: string[]) {
    const queryBuilder = this.createQueryBuilder('userBookmark')
      .innerJoinAndSelect('userBookmark.urlInfo', 'urlInfo', 'urlInfo.id IN (:...urlInfoIds)', {
        urlInfoIds,
      })
      .where('userBookmark.isPrivate = :isPrivate', { isPrivate: false })
      .groupBy('urlInfo.id');

    return queryBuilder.orderBy('userBookmark.createdAt', 'DESC').getMany();
  }

  async findOtherUserBookmarksByTags(userId: string, tags: Tag[]) {
    const queryBuilder = this.createQueryBuilder('userBookmark')
      .innerJoinAndSelect('userBookmark.tags', 'tags', 'tags.id IN (:tagIds)', { tagIds: tags.map(tag => tag.id) })
      .where('userBookmark.userId != :userId', { userId })
      .groupBy('userBookmark.userId');

    return queryBuilder.getMany();
  }

  async findRecommendedUserBookmarksByTag(
    urlHash: string,
    selectedTag: Tag,
    relatedTags: Tag[],
    howMany: number,
    user: User
  ) {
    const relatedTagIds = (relatedTags ?? []).map(tag => tag.id);

    return this.createQueryBuilder('userBookmark')
      .innerJoinAndSelect('userBookmark.urlInfo', 'urlInfo')
      .innerJoinAndSelect('userBookmark.tags', 'tag', 'tag.id IN (:tagIds)', {
        tagIds: relatedTagIds,
      })
      .addSelect('COUNT(*) AS userBookmarkCount')
      .where('userBookmark.urlHash != :urlHash', { urlHash })
      .andWhere('userBookmark.userId != :userId', { userId: user.id })
      .groupBy('userBookmark.urlHash')
      .orderBy('userBookmarkCount', 'DESC')
      .limit(howMany)
      .getMany();
  }

  async queryForUserBookmarksFeedPagination(
    query: GetPaginationUserBookmarksInput,
    filter: PaginationUserBookmarksFilter,
    // criteria: PaginationQueryCriteriaType,
    requestUser: User
  ) {
    const { first, after, order, orderBy } = query;
    const { normalizedTag, interestId, myUserBookmark, myReadUserBookmark, userId } = filter;

    const criteria = {
      isPrivate: false,
      createdAt: new Date(),
    };

    if (after) {
      const { createdAt: afterCreatedAt, order: orderInCursor, orderBy: orderByInCursor } = after;

      if (!(order === orderInCursor && orderBy === orderByInCursor)) {
        throw new PaginationWrongCursorException(after, orderBy, order);
      }

      criteria['createdAt'] = afterCreatedAt;
    }

    const queryBuilder = this.createQueryBuilder('userBookmark')
      .leftJoinAndSelect('userBookmark.urlInfo', 'urlInfo')
      .where('userBookmark.createdAt < :createdAt', { createdAt: criteria['createdAt'] })
      .andWhere('isPrivate = :isPrivate', { isPrivate: criteria['isPrivate'] });

    if (normalizedTag) {
      queryBuilder.innerJoinAndSelect('userBookmark.tags', 'tag', 'tag.normalizedTag = :normalizedTag', {
        normalizedTag,
      });
    } else {
      queryBuilder.leftJoinAndSelect('userBookmark.tags', 'tags');
    }

    if (interestId) {
      queryBuilder.innerJoinAndSelect('userBookmark.interest', 'interest', 'interest.id = :interestId', {
        interestId,
      });
      queryBuilder.andWhere('userBookmark.userId = :userId', { userId: requestUser.id });
    } else {
      queryBuilder.leftJoinAndSelect('userBookmark.interest', 'interest');
    }

    if (myUserBookmark) {
      queryBuilder.andWhere('userBookmark.userId = :userId', { userId: requestUser.id });
    }

    if (myReadUserBookmark) {
      queryBuilder
        .andWhere('userBookmark.userId = :userId', { userId: requestUser.id })
        .andWhere('userBookmark.donedAt IS NOT NULL');
    }

    if (userId) {
      queryBuilder.andWhere('userBookmark.userId = :userId', { userId });
    }

    queryBuilder
      // Use take instead of limit
      // https://github.com/typeorm/typeorm/issues/3967#issuecomment-529489375
      .take(first + 1)
      .orderBy('userBookmark.createdAt', 'DESC');

    return queryBuilder.getMany();
  }
}

import { Injectable } from '@nestjs/common';
import { GetPaginationUserBookmarksInput } from '@readable/pagination/paginationUserBookmarks/applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.input';
import { PaginationUserBookmarksFilter } from '@readable/pagination/paginationUserBookmarks/domain/models/paginationUserBookmarks.filter';
import { PaginationQueryCriteriaType } from '@readable/pagination/paginationUserBookmarks/domain/models/paginationUserBookmarks.model';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { User } from '@readable/users/domain/models/user.model';
import { EntityRepository, Repository } from 'typeorm';
import { UserBookmark } from '../entities/user-bookmark.entity';

@Injectable()
@EntityRepository(UserBookmark)
export class UserBookmarkRepository extends Repository<UserBookmark> {
  async queryForPagination(
    query: GetPaginationUserBookmarksInput,
    filter: PaginationUserBookmarksFilter,
    criteria: PaginationQueryCriteriaType,
    requestUser: User
  ) {
    const { first, after, order, orderBy } = query;
    const { normalizedTag, interestId } = filter;

    const queryBuilder = this.createQueryBuilder('userBookmark')
      .leftJoinAndSelect('userBookmark.urlInfo', 'urlInfo')
      .where('userBookmark.createdAt < :createdAt', { createdAt: criteria['createdAt'] });

    if (normalizedTag) {
      queryBuilder.leftJoinAndSelect('userBookmark.tags', 'tag', 'tag.normalizedTag = :normalizedTag', {
        normalizedTag,
      });
    } else {
      queryBuilder.leftJoinAndSelect('userBookmark.tags', 'tags');
    }

    if (interestId) {
      queryBuilder.leftJoinAndSelect('userBookmark.interest', 'interest', 'interest.id = :interestId', {
        interestId,
      });
      queryBuilder.andWhere('userBookmark.userId = :userId', { userId: requestUser.id });
    } else {
      queryBuilder.leftJoinAndSelect('userBookmark.interest', 'interest');
    }

    queryBuilder.limit(first + 1).orderBy('userBookmark.createdAt', 'DESC');

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
      .leftJoinAndSelect('userBookmark.urlInfo', 'urlInfo')
      .leftJoinAndSelect('userBookmark.tags', 'tag', 'tag.id IN (:tagIds)', {
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
}

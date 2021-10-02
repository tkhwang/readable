import { Injectable } from '@nestjs/common';
import { PaginationQueryCriteriaType } from '@readable/pagination/pagination.model';
import { GetPaginationTagsInput } from '@readable/pagination/tags/applications/usecases/get-pagination-tags/get-pagination-tags.input';
import { PaginationTagsFilter } from '@readable/pagination/tags/domain/models/paginationTags.filter';
import { User } from '@readable/users/domain/models/user.model';
import { EntityRepository, Repository } from 'typeorm';
import { Tag } from '../entities/tags.entity';

@Injectable()
@EntityRepository(Tag)
export class TagsRepository extends Repository<Tag> {
  async queryForPagination(
    query: GetPaginationTagsInput,
    filter: PaginationTagsFilter,
    criteria: PaginationQueryCriteriaType,
    requestUser: User
  ) {
    const { first, after, order, orderBy } = query;

    const queryBuilder = this.createQueryBuilder('tag')
      .innerJoinAndSelect('tag.userBookmarks', 'userBookmarks')
      .loadRelationCountAndMap('tag.bookmarksCount', 'tag.userBookmarks')
      .where('tag.createdAt < :createdAt', {
        createdAt: criteria['createdAt'],
      });

    queryBuilder.limit(first + 1).orderBy('tag.createdAt', 'DESC');

    return queryBuilder.getMany();
  }
}

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

    // MEMO(Teddy): it should work, but it's not. There is a bug in TypeORM.
    // .loadRelationCountAndMap('tag.bookmarksCount', 'tag.userBookmarks')
    // https://github.com/typeorm/typeorm/issues/1961#issuecomment-725577286
    const queryBuilder = this.createQueryBuilder('tag')
      .select(subQuery => {
        return subQuery
          .select('COUNT(*)', 'count')
          .from('user_bookmarks_tags_tags', 'user_bookmarks_tags_tags')
          .where('user_bookmarks_tags_tags.tagsId = tag.id');
      }, 'count')
      .innerJoinAndSelect('tag.userBookmarks', 'userBookmarks')
      .orderBy('count', 'DESC')
      .addOrderBy('tag.createdAt', 'DESC');

    const data = await queryBuilder.getMany();
    console.log('TCL: TagsRepository -> data', JSON.stringify(data, null, 2));

    return data;
  }
}

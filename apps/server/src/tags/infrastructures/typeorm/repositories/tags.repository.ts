import { Injectable } from '@nestjs/common';
import { GetPaginationTagsInput } from '@readable/pagination/tags/applications/usecases/get-pagination-tags/get-pagination-tags.input';
import { PaginationTagsFilter } from '@readable/pagination/tags/domain/models/paginationTags.filter';
import { PaginationWrongCursorException } from '@readable/pagination/userBookmarks/domain/errors/paginationUserBookmarks.errors';
import { User } from '@readable/users/domain/models/user.model';
import { EntityRepository, Repository } from 'typeorm';
import { Tag } from '../entities/tags.entity';

@Injectable()
@EntityRepository(Tag)
export class TagsRepository extends Repository<Tag> {
  async findTagsUserUses(userId: string) {
    const queryBuilder = this.createQueryBuilder('tag')
      .innerJoinAndSelect('tag.userBookmarks', 'userBookmarks', 'userBookmarks.userId IN (:userId)', { userId })
      .groupBy('tag.id')
      .orderBy('tag.createdAt', 'DESC');

    return queryBuilder.getMany();
  }

  async findPopularTags(howMany: number) {
    const queryBuilder = this.createQueryBuilder('tag')
      .select('tag.id', 'id')
      .addSelect('tag.tag', 'tag')
      .addSelect('tag.normalizedTag', 'normalizedTag')
      .addSelect('tag.imageUrl', 'imageUrl')
      .addSelect(subQuery => {
        return subQuery
          .select('CAST(COUNT(user_bookmarks_tags_tags.userBookmarksId) AS UNSIGNED)', 'tagCount')
          .from('user_bookmarks_tags_tags', 'user_bookmarks_tags_tags')
          .where('user_bookmarks_tags_tags.tagsId = tag.id');
      }, 'tagCount')
      .innerJoinAndSelect('tag.userBookmarks', 'userBookmarks')
      .loadRelationCountAndMap('tag.tagCount', 'tag.userBookmarks')
      .limit(howMany)
      .orderBy('tagCount', 'DESC')
      .addOrderBy('tag.createdAt', 'DESC')
      .groupBy('tag.id');

    return queryBuilder.getRawMany();
  }

  // TODO(Teddy)
  async queryForPagination(query: GetPaginationTagsInput, filter: PaginationTagsFilter, requestUser: User) {
    const { first, after, order, orderBy } = query;

    // MEMO(Teddy): Use count using SubQuery instead of loadRelationCountAndMap
    // https://github.com/typeorm/typeorm/issues/1961#issuecomment-725577286
    const queryBuilder = this.createQueryBuilder('tag')
      .select('tag.id', 'id')
      .addSelect('tag.tag', 'tag')
      .addSelect('tag.imageUrl', 'imageUrl')
      .addSelect('tag.normalizedTag', 'normalizedTag')
      .addSelect(subQuery => {
        return subQuery
          .select('CAST(COUNT(user_bookmarks_tags_tags.userBookmarksId) AS UNSIGNED)', 'tagCount')
          .from('user_bookmarks_tags_tags', 'user_bookmarks_tags_tags')
          .where('user_bookmarks_tags_tags.tagsId = tag.id');
      }, 'tagCount')
      .innerJoinAndSelect('tag.userBookmarks', 'userBookmarks')
      // MEMO(Teddy): it should work, but it's not. There is a bug in TypeORM.
      .loadRelationCountAndMap('tag.tagCount', 'tag.userBookmarks');

    if (after) {
      const { createdAt: afterCreatedAt, order: orderInCursor, orderBy: orderByInCursor, tagCount } = after;

      if (!(order === orderInCursor && orderBy === orderByInCursor)) {
        throw new PaginationWrongCursorException(after, orderBy, order);
      }

      if (tagCount) {
        queryBuilder.having('tagCount < :tagCount', { tagCount: String(Number(tagCount) - 1) });
        // TODO(Teddy)
        // .orHaving('tagCount = :tagCount AND tag.createdAt < :createdAt', {
        //   createdAt: afterCreatedAt,
        //   tagCount: tagCount,
        // })
      } else {
        queryBuilder.where('tag.createdAt < :createdAt', { createdAt: new Date() });
      }
    } else {
      queryBuilder.where('tag.createdAt < :createdAt', { createdAt: new Date() });
    }

    queryBuilder
      .limit(first + 1)
      .orderBy('tagCount', 'DESC')
      .addOrderBy('tag.createdAt', 'DESC')
      .groupBy('tag.id');

    return queryBuilder.getRawMany();
  }
}

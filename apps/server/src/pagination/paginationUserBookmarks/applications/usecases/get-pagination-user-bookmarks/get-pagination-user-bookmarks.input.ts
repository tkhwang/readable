import { Field, InputType } from '@nestjs/graphql';
import { PaginationCommonInput } from '@readable/common/pagination/pagination.input';
import { PaginationOrder, PaginationOrderBy } from '@readable/common/pagination/paginationCursor';

@InputType()
export class GetPaginationUserBookmarksInput extends PaginationCommonInput {
  @Field(type => String, {
    nullable: true,
    description: 'Pagination userBookmark filter: tag (in all users bookmarks)',
  })
  tagId?: string;

  @Field(type => String, {
    nullable: true,
    description: 'Pagination userBookmark filter: interest (in user bookmarks)',
  })
  interestId: string;

  @Field(type => PaginationOrderBy, {
    defaultValue: PaginationOrderBy.LATEST,
    description: 'Pagination bookmarks orderBy field',
  })
  orderBy: PaginationOrderBy;

  @Field(type => PaginationOrder, {
    defaultValue: PaginationOrder.DESC,
    description: 'Pagination bookmarks order field',
  })
  order: PaginationOrder;
}

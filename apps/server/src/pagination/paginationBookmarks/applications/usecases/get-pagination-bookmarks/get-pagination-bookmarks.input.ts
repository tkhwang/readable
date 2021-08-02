import { Field, InputType } from '@nestjs/graphql';
import { PaginationCommonInput } from '@readable/common/pagination/pagination.input';
import { PaginationOrder, PaginationOrderBy } from '@readable/common/pagination/paginationCursor';

@InputType()
export class GetPaginationBookmarksInput extends PaginationCommonInput {
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

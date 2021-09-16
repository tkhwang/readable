import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';

export interface PaginationUserBookmarksFilter {
  tagId?: string;
  interestId?: string;
}

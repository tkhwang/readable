import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';

export interface PaginationUserBookmarksFilter {
  tagId?: string;
  normalizedTag?: string;
  interestId?: string;
}

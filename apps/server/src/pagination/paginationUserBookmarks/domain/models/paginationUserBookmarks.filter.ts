import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';

export interface PaginationUserBookmarksFilter {
  tag?: Tag;
  tagId?: string;
}

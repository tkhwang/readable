import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagNotFoundExcepiton } from '@readable/tags/domain/erros/tag.error';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { TagsService } from '@readable/tags/tags.service';
import { GetPaginationUserBookmarksInput } from './paginationUserBookmarks/applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.input';
import { PaginationUserBookmarksFilter } from './paginationUserBookmarks/domain/models/paginationUserBookmarks.filter';

@Injectable()
export class PaginationService {
  constructor(
    private readonly tagsService: TagsService,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository
  ) {}

  async generateFilter(query: GetPaginationUserBookmarksInput) {
    const { tagId, interestId, myUserBookmark } = query;

    const filter: PaginationUserBookmarksFilter = {};

    if (tagId) {
      const tag = await this.tagsRepository.findOne(tagId);
      if (!tag) throw new TagNotFoundExcepiton(tagId);

      filter.normalizedTag = this.tagsService.normalizeTag(tag.tag);
    }

    if (interestId) {
      filter.interestId = interestId;
    }

    if (myUserBookmark) {
      filter.myUserBookmark = myUserBookmark;
    }

    return filter;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagNotFoundExcepiton } from '@readable/tags/domain/erros/tag.error';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { TagsUtilityService } from '@readable/tags/tags-utility.service';
import { TagsService } from '@readable/tags/tags.service';
import { GetPaginationUserBookmarksInput } from './userBookmarks/applications/usecases/get-pagination-user-bookmarks/get-pagination-user-bookmarks.input';
import { PaginationUserBookmarksFilter } from './userBookmarks/domain/models/paginationUserBookmarks.filter';

@Injectable()
export class PaginationService {
  constructor(
    private readonly tagsService: TagsService,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository
  ) {}

  async generateFilter(query: GetPaginationUserBookmarksInput) {
    const { tagId, interestId, myUserBookmark, userId } = query;

    const filter: PaginationUserBookmarksFilter = {};

    if (tagId) {
      const tag = await this.tagsRepository.findOne(tagId);
      if (!tag) throw new TagNotFoundExcepiton(tagId);

      filter.normalizedTag = TagsUtilityService.normalizeTag(tag.tag);
    }

    if (interestId) {
      filter.interestId = interestId;
    }

    if (myUserBookmark) {
      filter.myUserBookmark = myUserBookmark;
    }

    if (userId) {
      filter.userId = userId;
    }

    return filter;
  }
}

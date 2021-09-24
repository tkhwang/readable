import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { PaginationUserBookmarksFilter } from '@readable/pagination/paginationUserBookmarks/domain/models/paginationUserBookmarks.filter';
import { PaginationUserBookmarks } from '@readable/pagination/paginationUserBookmarks/domain/models/paginationUserBookmarks.model';
import { PaginationUserBookmarksService } from '@readable/pagination/paginationUserBookmarks/paginationUserBookmarks.service';
import { TagNotFoundExcepiton } from '@readable/tags/domain/erros/tag.error';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { TagsService } from '@readable/tags/tags.service';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { User } from '@readable/users/domain/models/user.model';
import { GetPaginationUserBookmarksInput } from './get-pagination-user-bookmarks.input';

export class GetPaginationUserBookmarksUsecase
  implements Usecase<GetPaginationUserBookmarksInput, PaginationUserBookmarks | null> {
  constructor(
    private readonly tagsService: TagsService,
    private readonly paginationUserBookmarksService: PaginationUserBookmarksService,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  async execute(query: GetPaginationUserBookmarksInput, requestUser: User) {
    const filter = await this.generateFilter(query);
    return this.paginationUserBookmarksService.generatePaginationFromQuery(
      query,
      filter,
      requestUser,
      (query, filter, criteria, requestUser) => {
        return this.userBookmarkRepository.queryForPagination(query, filter, criteria, requestUser);
      }
    );
  }

  private async generateFilter(query: GetPaginationUserBookmarksInput) {
    const { tagId, interestId } = query;

    const filter: PaginationUserBookmarksFilter = {};

    if (tagId) {
      const tag = await this.tagsRepository.findOne(tagId);
      if (!tag) throw new TagNotFoundExcepiton(tagId);

      filter.normalizedTag = this.tagsService.normalizeTag(tag.tag);
    }

    if (interestId) {
      filter.interestId = interestId;
    }

    return filter;
  }
}

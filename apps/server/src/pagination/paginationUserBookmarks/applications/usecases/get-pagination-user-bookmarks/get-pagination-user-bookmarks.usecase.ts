import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { PaginationUserBookmarksFilter } from '@readable/pagination/paginationUserBookmarks/domain/models/paginationUserBookmarks.filter';
import { PaginationUserBookmarks } from '@readable/pagination/paginationUserBookmarks/domain/models/paginationUserBookmarks.model';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { User } from '@readable/users/domain/models/user.model';
import { GetPaginationUserBookmarksInput } from './get-pagination-user-bookmarks.input';

export class GetPaginationUserBookmarksUsecase
  implements Usecase<GetPaginationUserBookmarksInput, PaginationUserBookmarks | null> {
  constructor(
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  async execute(query: GetPaginationUserBookmarksInput, requestUser: User) {
    const filter = await this.generateFilter(query);
    return this.userBookmarkRepository.getPaginationUserBookmarks(query, filter, requestUser);
  }

  private async generateFilter(query: GetPaginationUserBookmarksInput) {
    const { tagId, interestId } = query;

    const filter: PaginationUserBookmarksFilter = {};

    if (tagId) {
      filter.tagId = tagId;
    }

    if (interestId) {
      filter.interestId = interestId;
    }

    return filter;
  }
}

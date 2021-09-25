import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { PaginationService } from '@readable/pagination/pagination.service';
import { PaginationUserBookmarks } from '@readable/pagination/userBookmarks/domain/models/paginationUserBookmarks.model';
import { PaginationUserBookmarksService } from '@readable/pagination/userBookmarks/paginationUserBookmarks.service';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { TagsService } from '@readable/tags/tags.service';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { User } from '@readable/users/domain/models/user.model';
import { GetPaginationUserBookmarksInput } from './get-pagination-user-bookmarks.input';

export class GetPaginationUserBookmarksUsecase
  implements Usecase<GetPaginationUserBookmarksInput, PaginationUserBookmarks | null> {
  constructor(
    private readonly tagsService: TagsService,
    private readonly paginationService: PaginationService,
    private readonly paginationUserBookmarksService: PaginationUserBookmarksService,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  async execute(query: GetPaginationUserBookmarksInput, requestUser: User) {
    const filter = await this.paginationService.generateFilter(query);

    return this.paginationUserBookmarksService.generatePaginationFromQuery(
      query,
      filter,
      requestUser,
      (query, filter, criteria, requestUser) => {
        return this.userBookmarkRepository.queryForPagination(query, filter, criteria, requestUser);
      }
    );
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { PaginationService } from '@readable/pagination/pagination.service';
import { PaginationUserBookmarks } from '@readable/pagination/userBookmarks/domain/models/paginationUserBookmarks.model';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { User } from '@readable/users/domain/models/user.model';
import { GetPaginationUserBookmarksInput } from './get-pagination-user-bookmarks.input';

export class GetPaginationUserBookmarksUsecase
  implements Usecase<GetPaginationUserBookmarksInput, PaginationUserBookmarks | null> {
  constructor(
    private readonly paginationService: PaginationService,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  async execute(query: GetPaginationUserBookmarksInput, requestUser: User) {
    const filter = await this.paginationService.generateUserBookmarksFilter(query);

    return this.paginationService.generatePaginationFromQuery(
      query,
      filter,
      requestUser,
      (query, filter, criteria, requestUser) => {
        return this.userBookmarkRepository.queryForPagination(query, filter, criteria, requestUser);
      }
    );
  }
}

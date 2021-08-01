import { InjectRepository } from '@nestjs/typeorm';
import { BookmarksRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarks.repository';
import { Usecase } from '@readable/common/usecase';
import { PaginationBookmarks } from '@readable/pagination/paginationBookmarks/domain/paginationBookmarks.type';
import { User } from '@readable/users/domain/user.model';
import { GetPaginationBookmarksInput } from './get-pagination-bookmarks.input';

export class GetPaginationBookmarksUsecase implements Usecase<GetPaginationBookmarksInput, PaginationBookmarks | null> {
  constructor(
    @InjectRepository(BookmarksRepository)
    private readonly bookmarksRepository: BookmarksRepository
  ) {}

  async execute(query: GetPaginationBookmarksInput, requestUser: User) {
    return this.bookmarksRepository.getPaginationBookmarks(query, requestUser);
  }
}

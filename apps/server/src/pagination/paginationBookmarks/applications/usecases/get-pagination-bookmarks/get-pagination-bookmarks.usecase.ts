import { InjectRepository } from '@nestjs/typeorm';
import { BookmarksRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarks.repository';
import { Usecase } from '@readable/common/usecase';
import { PaginationBookmarkBRFOs } from '@readable/pagination/paginationBookmarks/domain/models/paginationBookmarks.type';
import { User } from '@readable/users/domain/models/user.model';
import { GetPaginationBookmarksInput } from './get-pagination-bookmarks.input';

export class GetPaginationBookmarksUsecase
  implements Usecase<GetPaginationBookmarksInput, PaginationBookmarkBRFOs | null> {
  constructor(@InjectRepository(BookmarksRepository) private readonly bookmarksRepository: BookmarksRepository) {}

  async execute(query: GetPaginationBookmarksInput, requestUser: User) {
    console.log('TCL: execute -> query', query);
    return this.bookmarksRepository.getPaginationBookmarks(query, requestUser);
  }
}

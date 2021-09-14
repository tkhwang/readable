import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { GetPaginationBookmarksInput } from '@readable/pagination/paginationBookmarks/applications/usecases/get-pagination-bookmarks/get-pagination-bookmarks.input';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { User } from '@readable/users/domain/models/user.model';

export class GetPaginationUserBookmarksUsecase implements Usecase<any, any> {
  constructor(
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  async execute(query: GetPaginationBookmarksInput, requestUser: User) {
    return this.userBookmarkRepository.getPaginationUserBookmarks(query, requestUser);
  }
}

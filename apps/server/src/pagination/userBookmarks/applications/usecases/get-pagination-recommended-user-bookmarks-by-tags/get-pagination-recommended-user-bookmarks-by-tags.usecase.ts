import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { PaginationService } from '@readable/pagination/pagination.service';
import { PaginationUserBookmarks } from '@readable/pagination/userBookmarks/domain/models/paginationUserBookmarks.model';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { UserNotFoundException } from '@readable/users/domain/errors/users.error';
import { User } from '@readable/users/domain/models/user.model';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { GetPaginationRecommendedUserBookmarksByTagsInput } from './get-pagination-recommended-user-bookmarks-by-tags.input';

@Injectable()
export class GetPaginationRecommendedUserBookmarksByTagsUsecase
  implements Usecase<GetPaginationRecommendedUserBookmarksByTagsInput, PaginationUserBookmarks | null> {
  constructor(
    private readonly paginationService: PaginationService,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  async execute(query: GetPaginationRecommendedUserBookmarksByTagsInput, requestUser: User) {
    const user = await this.usersRepository.findOne({
      where: {
        id: requestUser.id,
      },
      relations: ['tags'],
    });
    console.log('TCL: execute -> user', user);

    if (!user) throw new UserNotFoundException(requestUser.id);

    return this.paginationService.generatePaginationFromQuery(query, {}, user, (query, filter, user) => {
      return this.userBookmarkRepository.queryForRecommendedUserBookmarksByTagsFeedPagination(query, null, user);
    });
  }
}

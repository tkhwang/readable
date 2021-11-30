import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { UserBookmark } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.entity';
import { UserBookmarkRepository } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.repository';
import { UserBookmarkService } from '@readable/user-bookmark/application/user-bookmark.service';
import { User } from '@readable/users/domain/models/user.model';

export class GetMyUserBookmarksWithAuthUsecase implements Usecase<User, UserBookmark[]> {
  constructor(
    private readonly userBookmarkService: UserBookmarkService,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  async execute(requestUser: User) {
    return this.userBookmarkService.getUserBookmarksByUser(requestUser);
  }
}

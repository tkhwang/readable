import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { UserBookmark } from '@readable/user-bookmark/infrastructures/typeorm/entities/user-bookmark.entity';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { UserBookmarkService } from '@readable/user-bookmark/user-bookmark.service';
import { User } from '@readable/users/domain/models/user.model';

export class GetMyUserBookmarksWithAuth implements Usecase<User, UserBookmark[]> {
  constructor(
    private readonly userBookmarkService: UserBookmarkService,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  async execute(requestUser: User) {
    return this.userBookmarkService.getUserBookmarksByUser(requestUser);
  }
}

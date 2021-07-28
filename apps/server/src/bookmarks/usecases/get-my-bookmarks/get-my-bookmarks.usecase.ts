import { InjectRepository } from '@nestjs/typeorm';
import { Bookmark } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmark.entity';
import { BookmarksRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarks.repository';
import { Usecase } from '@readable/common/usecase';
import { User } from '@readable/users/domain/user.model';

export class GetMyBookmarksUsecase implements Usecase<User, Bookmark[]> {
  constructor(
    @InjectRepository(Bookmark) private readonly bookmarksRepository: BookmarksRepository // @InjectRepository(Bookmark) private readonly bookmarkRepository: Repository<Bookmark>
  ) {}

  async execute(requestUser: User) {
    const bookmarks = await this.bookmarksRepository.find();

    return bookmarks;
  }
}

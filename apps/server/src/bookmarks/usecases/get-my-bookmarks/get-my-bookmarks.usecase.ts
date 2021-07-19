import { InjectRepository } from '@nestjs/typeorm';
import { Bookmark } from '@readable/bookmarks/infrastructures/typeorm/bookmark.entity';
import { Usecase } from '@readable/common/usecase';
import { User } from '@readable/users/models/user.model';
import { Repository } from 'typeorm';

export class GetMyBookmarksUsecase implements Usecase<User, Bookmark[]> {
  constructor(@InjectRepository(Bookmark) private readonly bookmarkRepository: Repository<Bookmark>) {}

  async execute(requestUser: User) {
    const bookmarks = await this.bookmarkRepository.find({ where: { user: requestUser.id } });

    return bookmarks;
  }
}

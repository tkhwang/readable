import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkUser } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmarkUser.entity';
import { BookmarksRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarks.repository';
import { BookmarkUserssRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { Bookmark } from '@readable/bookmarks/models/bookmark.model';
import { Usecase } from '@readable/common/usecase';
import { User } from '@readable/users/domain/user.model';
import { DeleteBookmarkWithAuthInput } from './delete-bookmark-with-auth.input';

export class DeleteBookmarkWithAuthUsecse implements Usecase<DeleteBookmarkWithAuthInput, any> {
  constructor(
    @InjectRepository(Bookmark) private readonly bookmarksRepository: BookmarksRepository,
    @InjectRepository(BookmarkUser) private readonly bookmarkUserssRepository: BookmarkUserssRepository
  ) {}

  async execute(command: DeleteBookmarkWithAuthInput, requestUser: User) {
    const { bookmarkId } = command;

    const bookmarkUser = await this.bookmarkUserssRepository.findOne({ where: { bookmarkId, userId: requestUser. } });

  }
}

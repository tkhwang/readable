import { InjectRepository } from '@nestjs/typeorm';
import { Bookmark } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmark.entity';
import { BookmarkUser } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmarkUser.entity';
import { BookmarksRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarks.repository';
import { BookmarkUserssRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { Usecase } from '@readable/common/usecase';
import { User } from '@readable/users/domain/user.model';
import { In } from 'typeorm';

export class GetMyBookmarksUsecase implements Usecase<User, Bookmark[]> {
  constructor(
    @InjectRepository(Bookmark) private readonly bookmarksRepository: BookmarksRepository,
    @InjectRepository(BookmarkUser) private readonly bookmarkUserssRepository: BookmarkUserssRepository
  ) {}

  async execute(requestUser: User) {
    const mybookmarkIds = (await this.bookmarkUserssRepository.find({ where: { userId: requestUser.id } })).map(
      bookmarkUser => bookmarkUser.bookmarkId
    );

    return this.bookmarksRepository.find({ where: { id: In(mybookmarkIds) } });
  }
}

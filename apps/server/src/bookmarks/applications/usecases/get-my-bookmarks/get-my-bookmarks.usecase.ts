import { InjectRepository } from '@nestjs/typeorm';
import { Bookmark } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmark.entity';
import { BookmarksRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarks.repository';
import { BookmarkUsersRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { Usecase } from '@readable/common/usecase';
import { User } from '@readable/users/domain/user.model';
import { In } from 'typeorm';

export class GetMyBookmarksUsecase implements Usecase<User, Bookmark[]> {
  constructor(
    @InjectRepository(BookmarksRepository) private readonly bookmarksRepository: BookmarksRepository,
    @InjectRepository(BookmarkUsersRepository) private readonly bookmarkUsersRepository: BookmarkUsersRepository
  ) {}

  async execute(requestUser: User) {
    const mybookmarkIds = (await this.bookmarkUsersRepository.find({ where: { userId: requestUser.id } })).map(
      bookmarkUser => bookmarkUser.bookmarkId
    );

    return this.bookmarksRepository.find({ where: { id: In(mybookmarkIds) } });
  }
}

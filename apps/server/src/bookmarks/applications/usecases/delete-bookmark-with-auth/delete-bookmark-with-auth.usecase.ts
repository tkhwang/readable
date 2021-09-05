import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkUsersRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { Usecase } from '@readable/common/applications/usecase';
import { User } from '@readable/users/domain/models/user.model';
import { DeleteBookmarkWithAuthInput } from './delete-bookmark-with-auth.input';
import {
  DeleteBookmarkWithAuthFailException,
  UnauthorizedDeleteBookmarkWithAuthException,
} from '@readable/bookmarks/domain/erros/bookmarks.error';
import { CommonOutput } from '@readable/common/models/common.output';

export class DeleteBookmarkWithAuthUsecse implements Usecase<DeleteBookmarkWithAuthInput, CommonOutput> {
  constructor(
    @InjectRepository(BookmarkUsersRepository) private readonly bookmarkUsersRepository: BookmarkUsersRepository
  ) {}

  async execute(command: DeleteBookmarkWithAuthInput, requestUser: User): Promise<CommonOutput> {
    const { bookmarkId } = command;

    const bookmarkUser = await this.bookmarkUsersRepository.findOne({ where: { bookmarkId, userId: requestUser.id } });
    if (!bookmarkUser) throw new UnauthorizedDeleteBookmarkWithAuthException(requestUser.id, bookmarkId);

    try {
      await this.bookmarkUsersRepository.softRemove(bookmarkUser);

      return new CommonOutput(true);
    } catch (error) {
      throw new DeleteBookmarkWithAuthFailException(requestUser.id, bookmarkId, error.message);
    }
  }
}

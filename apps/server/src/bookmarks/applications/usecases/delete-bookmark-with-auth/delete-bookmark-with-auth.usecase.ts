import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkUser } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmarkUser.entity';
import { BookmarkUserssRepository } from '@readable/bookmarks/infrastructures/typeorm/repositories/bookmarkUsers.repository';
import { Usecase } from '@readable/common/usecase';
import { User } from '@readable/users/domain/user.model';
import { DeleteBookmarkWithAuthInput } from './delete-bookmark-with-auth.input';
import {
  DeleteBookmarkWithAuthFailException,
  UnauthorizedDeleteBookmarkWithAuthException,
} from '@readable/bookmarks/domain/erros/bookmarks.error';
import { CommonOutput } from '@readable/common/models/common.output';

export class DeleteBookmarkWithAuthUsecse implements Usecase<DeleteBookmarkWithAuthInput, CommonOutput> {
  constructor(@InjectRepository(BookmarkUser) private readonly bookmarkUserssRepository: BookmarkUserssRepository) {}

  async execute(command: DeleteBookmarkWithAuthInput, requestUser: User): Promise<CommonOutput> {
    const { bookmarkId } = command;

    const bookmarkUser = await this.bookmarkUserssRepository.findOne({ where: { bookmarkId, userId: requestUser.id } });
    if (!bookmarkUser) throw new UnauthorizedDeleteBookmarkWithAuthException(requestUser.id, bookmarkId);

    try {
      await this.bookmarkUserssRepository.softRemove(bookmarkUser);

      return new CommonOutput(true);
    } catch (error) {
      throw new DeleteBookmarkWithAuthFailException(requestUser.id, bookmarkId, error.message);
    }
  }
}

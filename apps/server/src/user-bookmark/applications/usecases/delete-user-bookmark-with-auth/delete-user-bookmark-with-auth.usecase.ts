import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { CommonOutput } from '@readable/common/models/common.output';
import {
  DeleteUserBookmarkWithAuthFailException,
  UnauthorizedDeleteUserBookmarkWithAuthException,
} from '@readable/user-bookmark/domain/errors/user-bookmark.error';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { User } from '@readable/users/domain/models/user.model';
import { DeleteUserBookmarkWithAuthInput } from './delete-user-bookmark-with-auth.input';

export class DeleteUserBookmarkWithAuthUsecase implements Usecase<DeleteUserBookmarkWithAuthInput, CommonOutput> {
  constructor(
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  async execute(command: DeleteUserBookmarkWithAuthInput, requestUser: User) {
    const { userBookmarkId } = command;

    try {
      const userBookmark = await this.userBookmarkRepository.findOne({
        where: { id: userBookmarkId, userId: requestUser.id },
      });

      console.log('TCL: DeleteUserBookmarkWithAuthUsecase -> execute -> userBookmark', userBookmark);

      if (!userBookmark) throw new UnauthorizedDeleteUserBookmarkWithAuthException(requestUser.id, userBookmarkId);

      const data = await this.userBookmarkRepository.softRemove(userBookmark);
      console.log('TCL: DeleteUserBookmarkWithAuthUsecase -> execute -> data', data);

      return new CommonOutput(true);
    } catch (error) {
      throw new DeleteUserBookmarkWithAuthFailException(requestUser.id, userBookmarkId, error.message);
    }
  }
}

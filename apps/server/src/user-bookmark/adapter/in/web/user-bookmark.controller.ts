import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { RequestWithInjectedUser } from '@readable/auth/domain/auth.type';
import { JwtAuthGuard } from '@readable/auth/domain/jwt-auth.guard';
import { AddUserBookmarkWithAuthInput } from '../../../application/port/in/usecases/add-user-bookmark-with-auth/add-user-bookmark-with-auth.input';
import { AddUserBookmarkWithAuthUsecase } from '../../../application/port/in/usecases/add-user-bookmark-with-auth/add-user-bookmark-with-auth.usecase';

@Controller('user-bookmark')
export class UserBookmarkController {
  constructor(private readonly addUserBookmarkWithAuthUsecase: AddUserBookmarkWithAuthUsecase) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async addUserBookmark(
    @Body('url') url: string,
    @Body('interest') interest: string,
    @Body('tags') tags: string[] = [],
    @Request() req: RequestWithInjectedUser
  ) {
    const requestUser = req.user;
    const addUserBookmarkWithAuthInput = new AddUserBookmarkWithAuthInput(url, interest, tags);

    return this.addUserBookmarkWithAuthUsecase.execute(addUserBookmarkWithAuthInput, requestUser);
  }
}

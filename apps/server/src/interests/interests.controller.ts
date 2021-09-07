import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { RequestWithInjectedUser } from '@readable/auth/domain/auth.type';
import { JwtAuthGuard } from '@readable/auth/domain/jwt-auth.guard';
import { GetMyInterestsWithAuthUsecase } from './applications/usecases/get-my-interests-with-auth/get-my-interests-with-auth.usecase';

@Controller('interests')
export class InterestsController {
  constructor(private readonly getMyInterestsWithAuthUsecase: GetMyInterestsWithAuthUsecase) {}

  @UseGuards(JwtAuthGuard)
  @Get('my')
  async myInterests(@Request() req: RequestWithInjectedUser) {
    const requestUser = req.user;
    return this.getMyInterestsWithAuthUsecase.execute(requestUser);
  }
}

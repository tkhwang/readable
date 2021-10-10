import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommonOutput } from '@readable/common/models/common.output';
import { InitializeTagsUseCase } from '@readable/tags/applications/usercases/initialize-tags/initialize-tags.usecase';
import { AddTestUserBookmarkUsecase } from './applications/usecases/add-test-userBookmark/add-test-userBookmark.usecase';
import { CreateTestUsersUseCase } from './applications/usecases/create-test-users/create-test-users.usecase';

@Controller('operation')
export class OperationController {
  constructor(
    private readonly createTestUsersUseCase: CreateTestUsersUseCase,
    private readonly initializeTagsUseCase: InitializeTagsUseCase,
    private readonly addTestUserBookmarkUsecase: AddTestUserBookmarkUsecase
  ) {}

  @Post('/init-tags')
  @UseGuards(AuthGuard('api-key'))
  async initTags() {
    return this.initializeTagsUseCase.execute();
  }

  @Post('/create-random-data')
  @UseGuards(AuthGuard('api-key'))
  async createRandomData() {
    await this.createTestUsersUseCase.execute();
    await this.addTestUserBookmarkUsecase.execute();

    return new CommonOutput(true);
  }
}

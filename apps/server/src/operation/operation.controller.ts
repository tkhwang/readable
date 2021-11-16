import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AddCategoryInput } from '@readable/categories/applications/usecases/add-category/add-category.input';
import { AddCategoryUsecase } from '@readable/categories/applications/usecases/add-category/add-category.usecase';
import { CommonOutput } from '@readable/common/models/common.output';
import { InitializeTagsUseCase } from '@readable/tags/applications/usercases/initialize-tags/initialize-tags.usecase';
import { AddTestUserBookmarkUsecase } from '../user-bookmark/applications/usecases/add-test-userBookmark/add-test-userBookmark.usecase';
import { CreateTestUsersUseCase } from '../users/applications/usecases/create-test-users/create-test-users.usecase';

@Controller('operation')
export class OperationController {
  constructor(
    private readonly createTestUsersUseCase: CreateTestUsersUseCase,
    private readonly initializeTagsUseCase: InitializeTagsUseCase,
    private readonly addTestUserBookmarkUsecase: AddTestUserBookmarkUsecase,
    private readonly cddCategoryUsecase: AddCategoryUsecase
  ) {}

  @Post('/create-random-data')
  @UseGuards(AuthGuard('api-key'))
  async createRandomData() {
    await this.createTestUsersUseCase.execute();
    await this.initializeTagsUseCase.execute();
    await this.addTestUserBookmarkUsecase.execute();

    return new CommonOutput(true);
  }

  @Post('/init-tags')
  @UseGuards(AuthGuard('api-key'))
  async initTags() {
    return this.initializeTagsUseCase.execute();
  }

  @Post('/add-category')
  @UseGuards(AuthGuard('api-key'))
  async addCategory(@Body('category') category: string) {
    const command = new AddCategoryInput(category);
    return this.cddCategoryUsecase.execute(command);
  }
}

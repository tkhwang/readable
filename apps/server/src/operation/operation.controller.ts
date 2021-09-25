import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InitializeTagsUseCase } from '@readable/tags/applications/usercases/initialize-tags/initialize-tags.usecase';

@Controller('operation')
export class OperationController {
  constructor(private readonly initializeTagsUseCase: InitializeTagsUseCase) {}

  @Post('/init-tags')
  @UseGuards(AuthGuard('api-key'))
  async initTags() {
    return this.initializeTagsUseCase.execute();
  }
}

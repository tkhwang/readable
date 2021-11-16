import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AddCategoryInput } from './applications/usecases/add-category/add-category.input';
import { AddCategoryUsecase } from './applications/usecases/add-category/add-category.usecase';

@Controller('category')
export class CategoryController {
  constructor(private readonly cddCategoryUsecase: AddCategoryUsecase) {}

  @Post('/add-category')
  @UseGuards(AuthGuard('api-key'))
  async addCategory(@Body('category') category: string) {
    const command = new AddCategoryInput(category);
    return this.cddCategoryUsecase.execute(command);
  }
}

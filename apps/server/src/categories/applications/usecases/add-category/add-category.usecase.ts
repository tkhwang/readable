import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '@readable/categories/infrastructures/typeorm/repositories/category.repository';
import { Usecase } from '@readable/common/applications/usecase';
import { AddCategoryInput } from './add-category.input';

@Injectable()
export class AddCategoryUsecase implements Usecase<AddCategoryInput, any> {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute(command: AddCategoryInput) {
    const { category } = command;

    return this.categoriesRepository.save({ category });
  }
}

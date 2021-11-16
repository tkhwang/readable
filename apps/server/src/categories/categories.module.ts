import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestsRepository } from '@readable/interests/infrastructures/typeorm/repositories/interest.repository';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { UrlInfoRepository } from '@readable/url-info/infrastructures/typeorm/repositories/url-info.repository';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { AddCategoryUsecase } from './applications/usecases/add-category/add-category.usecase';
import { CategoriesRepository } from './infrastructures/typeorm/repositories/category.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoriesRepository,
      TagsRepository,
      UserBookmarkRepository,
      UrlInfoRepository,
      InterestsRepository,
    ]),
  ],
  providers: [AddCategoryUsecase],
})
export class CategoriesModule {}

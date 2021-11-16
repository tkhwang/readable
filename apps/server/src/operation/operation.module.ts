import { Module } from '@nestjs/common';
import { OperationService } from './operation.service';
import { OperationController } from './operation.controller';
import { TagsModule } from '@readable/tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { CreateTestUsersUseCase } from '../users/applications/usecases/create-test-users/create-test-users.usecase';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { AddTestUserBookmarkUsecase } from '../user-bookmark/applications/usecases/add-test-userBookmark/add-test-userBookmark.usecase';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { UserBookmarkModule } from '@readable/user-bookmark/user-bookmark.module';
import { InitializeTagsUseCase } from '@readable/tags/applications/usercases/initialize-tags/initialize-tags.usecase';
import { SearchService } from '@readable/search/search.service';
import { AddCategoryUsecase } from '@readable/categories/applications/usecases/add-category/add-category.usecase';
import { CategoriesRepository } from '@readable/categories/infrastructures/typeorm/repositories/category.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository, TagsRepository, UserBookmarkRepository, CategoriesRepository]),
    TagsModule,
    UserBookmarkModule,
  ],
  providers: [
    OperationService,
    CreateTestUsersUseCase,
    AddTestUserBookmarkUsecase,
    InitializeTagsUseCase,
    SearchService,
    AddCategoryUsecase,
  ],
  controllers: [OperationController],
})
export class OperationModule {}

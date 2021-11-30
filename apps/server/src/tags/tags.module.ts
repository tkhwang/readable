import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchModule } from '@readable/search/search.module';
import { InitializeTagsUseCase } from './applications/usercases/initialize-tags/initialize-tags.usecase';
import { MapTagsUsecase } from './applications/usercases/map-tags/map-tags.usecase';
import { TagsRepository } from './infrastructures/typeorm/repositories/tags.repository';
import { TagsService } from './tags.service';
import { TagsResolver } from './tags.resolver';
import { UserBookmarkRepository } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.repository';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { FollowTagWithAuthUsecase } from './applications/usercases/follow-tag-with-auth/follow-tag-with-auth.usecase';
import { FindPopularTagsWithAuthUsecase } from './applications/usercases/find-popular-tags-with-auth/find-popular-tags-with-auth.usecase';
import { CategoriesRepository } from '@readable/categories/infrastructures/typeorm/repositories/category.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TagsRepository,
      UserBookmarkRepository,
      UsersRepository,
      UsersRepository,
      CategoriesRepository,
    ]),
    SearchModule,
  ],
  providers: [
    TagsService,
    InitializeTagsUseCase,
    MapTagsUsecase,
    TagsResolver,
    FollowTagWithAuthUsecase,
    FindPopularTagsWithAuthUsecase,
  ],
  exports: [TagsService, InitializeTagsUseCase, MapTagsUsecase],
})
export class TagsModule {}

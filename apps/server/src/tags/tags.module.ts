import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchModule } from '@readable/search/search.module';
import { InitializeTagsUseCase } from './applications/usercases/initialize-tags/initialize-tags.usecase';
import { MapTagsUsecase } from './applications/usercases/map-tags/map-tags.usecase';
import { TagsRepository } from './infrastructures/typeorm/repositories/tags.repository';
import { TagsService } from './tags.service';
import { TagsResolver } from './tags.resolver';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TagsRepository, UserBookmarkRepository, UsersRepository]), SearchModule],
  providers: [TagsService, InitializeTagsUseCase, MapTagsUsecase, TagsResolver],
  exports: [TagsService, InitializeTagsUseCase, MapTagsUsecase],
})
export class TagsModule {}

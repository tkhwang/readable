import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchModule } from '@readable/search/search.module';
import { InitializeTagsUseCase } from './applications/usercases/initialize-tags/initialize-tags.usecase';
import { TagsRepository } from './infrastructures/typeorm/repositories/tags.repository';
import { TagsService } from './tags.service';

@Module({
  imports: [TypeOrmModule.forFeature([TagsRepository]), SearchModule],
  providers: [TagsService, InitializeTagsUseCase],
  exports: [TagsService, InitializeTagsUseCase],
})
export class TagsModule {}

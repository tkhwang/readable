import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { UserBookmarkRepository } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.repository';
import { RecommendUserBookmarksByTagsUsecase } from './applications/usecases/recommend-user-bookmarks-by-tags/recommend-user-bookmarks-by-tags.usecase';
import { RecommendUserUseCase } from './applications/usecases/recommend-user/recommend-user.usecase';
import { RecommendService } from './recommend.service';
import { RecommendResolver } from './recommend.resolver';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserBookmarkRepository, UsersRepository, TagsRepository])],
  providers: [RecommendService, RecommendUserBookmarksByTagsUsecase, RecommendUserUseCase, RecommendResolver],
  exports: [RecommendUserBookmarksByTagsUsecase],
})
export class RecommendModule {}

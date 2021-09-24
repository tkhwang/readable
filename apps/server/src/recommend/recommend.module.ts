import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { RecommendUserBookmarksByTagsUsecase } from './applications/usecases/recommend-user-bookmarks-by-tags/recommend-user-bookmarks-by-tags.usecase';
import { RecommendService } from './recommend.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserBookmarkRepository, TagsRepository])],
  providers: [RecommendService, RecommendUserBookmarksByTagsUsecase],
  exports: [RecommendUserBookmarksByTagsUsecase],
})
export class RecommendModule {}

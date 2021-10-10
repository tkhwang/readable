import { Module } from '@nestjs/common';
import { OperationService } from './operation.service';
import { OperationController } from './operation.controller';
import { TagsModule } from '@readable/tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { CreateTestUsersUseCase } from './applications/usecases/create-test-users/create-test-users.usecase';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { AddTestUserBookmarkUsecase } from './applications/usecases/add-test-userBookmark/add-test-userBookmark.usecase';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { UserBookmarkModule } from '@readable/user-bookmark/user-bookmark.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository, TagsRepository, UserBookmarkRepository]),
    TagsModule,
    UserBookmarkModule,
  ],
  providers: [OperationService, CreateTestUsersUseCase, AddTestUserBookmarkUsecase],
  controllers: [OperationController],
})
export class OperationModule {}

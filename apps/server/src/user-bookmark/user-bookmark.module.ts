import { Module } from '@nestjs/common';
import { UserBookmarkController } from './user-bookmark.controller';
import { UserBookmarkResolver } from './user-bookmark.resolver';
import { UserBookmarkService } from './user-bookmark.service';

@Module({
  controllers: [UserBookmarkController],
  providers: [UserBookmarkResolver, UserBookmarkService]
})
export class UserBookmarkModule {}

import { Field, ObjectType } from '@nestjs/graphql';
import { UserBookmark as UserBookmarkModel } from '@readable/user-bookmark/domain/model/user-bookmark.model';
import { UserBookmark as UserBookmarkEntity } from '@readable/user-bookmark/infrastructures/typeorm/entities/user-bookmark.entity';

@ObjectType()
export class FindMyUserBookmarksGroupedByInterestsOutput {
  @Field(type => String)
  interest: string;

  @Field(type => [UserBookmarkModel])
  userBookmarks: UserBookmarkEntity[];

  constructor(interest: string, userBookmarks: UserBookmarkEntity[]) {
    this.interest = interest;
    this.userBookmarks = userBookmarks;
  }
}

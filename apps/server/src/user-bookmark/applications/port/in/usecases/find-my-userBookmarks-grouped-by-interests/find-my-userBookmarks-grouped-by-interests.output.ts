import { Field, ObjectType } from '@nestjs/graphql';
import { UserBookmark as UserBookmarkEntity } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.entity';
import { UserBookmark as UserBookmarkModel } from '@readable/user-bookmark/domain/model/user-bookmark.model';

@ObjectType()
export class FindMyUserBookmarksGroupedByInterestData {
  @Field(type => String)
  interestId: string;

  @Field(type => String)
  interest: string;

  constructor(interestId: string, interest: string) {
    this.interestId = interestId;
    this.interest = interest;
  }
}

@ObjectType()
export class FindMyUserBookmarksGroupedByInterestsOutput {
  @Field(type => FindMyUserBookmarksGroupedByInterestData)
  interest: FindMyUserBookmarksGroupedByInterestData;

  @Field(type => [UserBookmarkModel])
  userBookmarks: UserBookmarkEntity[];

  constructor(interest: FindMyUserBookmarksGroupedByInterestData, userBookmarks: UserBookmarkEntity[]) {
    this.interest = interest;
    this.userBookmarks = userBookmarks;
  }
}

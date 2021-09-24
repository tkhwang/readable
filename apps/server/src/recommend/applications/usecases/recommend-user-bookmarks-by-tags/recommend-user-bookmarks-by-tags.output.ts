import { Field, ObjectType } from '@nestjs/graphql';
import { UserBookmark } from '@readable/user-bookmark/infrastructures/typeorm/entities/user-bookmark.entity';

@ObjectType()
export class RecommendUserBookmarksByTagsOutput {
  @Field(type => String)
  tag: string;

  @Field(type => [UserBookmark])
  recommendedUserBookmarks: UserBookmark[];
}

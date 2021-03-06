import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';
import { UserBookmark as UserBookmarkEntity } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.entity';
import { UserBookmark as UserBookmarkModel } from '@readable/user-bookmark/domain/user-bookmark.model';

@ObjectType()
export class TagBRFO extends CoreModel {
  @Field(type => String)
  tag: string;

  @Field(type => String)
  normalizedTag: string;

  @Field(type => String, { nullable: true })
  categoryId?: string;

  @Field(type => String, { nullable: true })
  imageUrl?: string;

  @Field(type => String, { nullable: true })
  description?: string;

  @Field(type => [UserBookmarkModel])
  userBookmarks: UserBookmarkEntity[];
}

@ObjectType()
export class Tag extends TagBRFO {
  @Field(type => Number, { description: 'Tag followers User count (resolver field)' })
  followersCount: number;

  @Field(type => Number, { description: 'Tagged post count (resolver field)' })
  userBookmarksCount: number;

  @Field(type => Boolean)
  isFollowingTag: boolean;
}

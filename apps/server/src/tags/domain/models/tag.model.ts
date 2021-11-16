import { Field, ObjectType } from '@nestjs/graphql';
import { Category as CategoryModel } from '@readable/categories/domain/category.model';
import { Category as CategoryEntity } from '@readable/categories/infrastructures/typeorm/entities/category.entity';
import { CoreModel } from '@readable/common/models/core.model';
import { UserBookmark as UserBookmarkModel } from '@readable/user-bookmark/domain/model/user-bookmark.model';
import { UserBookmark as UserBookmarkEntity } from '@readable/user-bookmark/infrastructures/typeorm/entities/user-bookmark.entity';

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

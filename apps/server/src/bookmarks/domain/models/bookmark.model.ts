import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';
import { Interest } from '@readable/interests/domain/interest.model';
import { User } from '@readable/users/domain/models/user.model';
import { Tag } from './tag.model';

export enum LikeType {
  NONE = 'none',
  FACTFUL = 'factful',
  EMOTIONAL = 'emotional',
  INSPARATIONAL = 'inspirational',
}

registerEnumType(LikeType, {
  name: 'LikeType',
  description: 'Bookmark like type',
});

@ObjectType()
export class BookmarkBRFO extends CoreModel {
  @Field(type => String)
  url: string;

  @Field(type => String)
  siteName: string;

  @Field(type => String)
  title: string;

  @Field(type => String)
  type: string;

  @Field(type => String)
  urlHash: string;

  @Field(type => String)
  description: string;

  @Field(type => String)
  imageUrl: string;

  @Field(type => String)
  generatedImage: string;

  @Field(type => [String], { description: 'User interest which includes bookmarks.' })
  interestId: string;

  @Field(type => [String], { nullable: true, description: 'tag ids' })
  tagIds?: string[];

  @Field(type => String, { nullable: true })
  summary?: string;

  // Model only

  @Field(type => Int)
  howMany?: number;
}

@ObjectType()
export class Bookmark extends BookmarkBRFO {
  @Field(type => [User], { nullable: true })
  collectors: User[];

  @Field(type => [User], { nullable: true })
  schedulers: User[];

  @Field(type => [User], { nullable: true })
  finishers: User[];

  @Field(type => Interest)
  interest: Interest;

  @Field(type => [Tag])
  tags: Tag[];
}

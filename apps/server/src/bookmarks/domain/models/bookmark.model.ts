import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';
import { User } from '@readable/users/domain/models/user.model';

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

  @Field(type => [String])
  tags: string[];

  @Field(type => Int)
  countFactful: number;

  @Field(type => Int)
  countEmotional: number;

  @Field(type => Int)
  countInspirational: number;

  @Field(type => Date, { nullable: true })
  scheduledAt?: Date;

  @Field(type => Date, { nullable: true })
  donedAt?: Date;

  // Model only

  @Field(type => Int)
  howMany?: number;
}

@ObjectType()
export class Bookmark extends BookmarkBRFO {
  @Field(type => [User], { nullable: true })
  collector: User[];
}

import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';

@ObjectType()
export class TagBRFO extends CoreModel {
  @Field(type => String)
  tag: string;

  @Field(type => String)
  normalizedTag: string;

  @Field(type => String, { nullable: true })
  imageUrl?: string;

  @Field(type => String, { nullable: true })
  description?: string;
}

@ObjectType()
export class Tag extends TagBRFO {
  // @Field(type => Number, { description: 'Tag followers User count (resolver field)' })
  // followersCount: number;
  // postsCount: number;
}

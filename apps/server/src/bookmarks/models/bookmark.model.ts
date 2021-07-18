import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';

@ObjectType()
export class Bookmark extends CoreModel {
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
}

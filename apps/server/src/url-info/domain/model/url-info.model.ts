import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';

@ObjectType()
export class UrlInfoBRFO extends CoreModel {
  @Field(type => String, { description: 'URL' })
  url: string;

  @Field(type => String, { description: 'URL Hash' })
  urlHash: string;

  @Field(type => String, { nullable: true, description: 'Site name' })
  siteName: string;

  @Field(type => String, { nullable: true, description: 'Title' })
  title: string;

  @Field(type => String, { nullable: true, description: 'Type : website, article, ...' })
  type?: string;

  @Field(type => String, { nullable: true, description: 'Description' })
  description?: string;

  @Field(type => String, { nullable: true, description: 'Image url' })
  imageUrl: string;

  @Field(type => String, { nullable: true, description: 'Summary' })
  summary?: string;

  //   @Field(type => [BookmarkUser])
  //   bookmarkUsers: BookmarkUser[];

  // Model only
}

@ObjectType()
export class UrlInfo extends UrlInfoBRFO {
  @Field(type => Int)
  howMany?: number;
}

import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CoreModel } from '@readable/common/models/core.model';
import { BookmarkImage } from './bookmark-image.model';

@InputType({ isAbstract: true })
// @Schema({ collection: 'bookmarks' })
@ObjectType()
export class Bookmark extends CoreModel {
  // @Prop({ required: true })
  @Field(type => String)
  url: string;

  // @Prop()
  @Field(type => String, { nullable: true })
  siteName: string;

  // @Prop()
  @Field(type => String, { nullable: true })
  title: string;

  // @Prop()
  @Field(type => String, { nullable: true })
  type: string;

  // @Prop()
  @Field(type => String, { nullable: true })
  urlHash?: string;

  // @Prop()
  @Field(type => String, { nullable: true })
  description: string;

  // @Prop({
  //   type: BookmarkImage,
  // })
  @Field(type => BookmarkImage, { nullable: true })
  image: BookmarkImage;

  // @Prop()
  @Field(type => String, { nullable: true })
  generatedImage?: string;
}

import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BookmarkImage } from '@readable/bookmarks/models/bookmark-image.model';
import { CoreEntity } from '@readable/common/infrastructures/mongo/entities';

// @InputType({ isAbstract: true })
@Schema({ collection: 'bookmarks' })
// @ObjectType()
export class Bookmark extends CoreEntity {
  @Prop({ required: true })
  // @Field(type => String)
  url: string;

  @Prop()
  // @Field(type => String, { nullable: true })
  siteName: string;

  @Prop()
  // @Field(type => String, { nullable: true })
  title: string;

  @Prop()
  // @Field(type => String, { nullable: true })
  type: string;

  @Prop()
  // @Field(type => String, { nullable: true })
  urlHash?: string;

  @Prop()
  // @Field(type => String, { nullable: true })
  description: string;

  @Prop({
    type: BookmarkImage,
  })
  // @Field(type => BookmarkImage, { nullable: true })
  image: BookmarkImage;

  @Prop()
  // @Field(type => String, { nullable: true })
  generatedImage?: string;
}

export type BookmarkDocument = Bookmark & Document;
export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);

import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CoreEntity } from '@readable/common/entities/core.entity';
import { ObjectIdScalar } from '@readable/types/ObjectIdScalar';
import { ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';
import { BookmarkImage } from './bookmark-image.model';

@InputType({ isAbstract: true })
@Schema({ collection: 'bookmarks' })
@ObjectType()
export class Bookmark extends CoreEntity {
  @Prop()
  @Field(type => String, { nullable: true })
  title: string;

  @Prop()
  @Field(type => String, { nullable: true })
  type?: string;

  @Prop({ required: true })
  @Field(type => String)
  url: string;

  @Prop({ required: true })
  @Field(type => String)
  urlHash: string;

  @Prop()
  @Field(type => String, { nullable: true })
  description?: string;

  @Prop({
    type: BookmarkImage,
  })
  @Field(type => BookmarkImage, { nullable: true })
  image?: BookmarkImage;

  @Prop()
  @Field(type => String, { nullable: true })
  generatedImage?: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  })
  @Field(type => ObjectIdScalar)
  createBy: ObjectId;
}

export type BookmarkDocument = Bookmark & Document;
export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);

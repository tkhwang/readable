import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class BookmarkImage {
  @Prop({ required: true })
  @Field(type => String)
  url: string;

  @Prop()
  @Field(type => String, { nullable: true })
  type?: string;

  @Prop()
  @Field(type => String, { nullable: true })
  width?: string;

  @Prop()
  @Field(type => String, { nullable: true })
  height?: string;
}

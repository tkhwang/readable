import { Field, InputType, PickType } from '@nestjs/graphql';
import { Bookmark } from './bookmark.model';

@InputType()
export class BookmarkInput {
  @Field(type => String)
  url: string;

  @Field(type => String)
  title: string;

  @Field(type => Date, { nullable: true })
  scheduledAt?: Date;
}

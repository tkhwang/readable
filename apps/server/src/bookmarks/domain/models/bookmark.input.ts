import { Field, InputType, PickType } from '@nestjs/graphql';

@InputType()
export class BookmarkInput {
  @Field(type => String)
  url: string;

  @Field(type => String)
  title: string;

  @Field(type => Date)
  scheduledAt?: Date;
}

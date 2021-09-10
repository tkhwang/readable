import { Field, InputType } from '@nestjs/graphql';

@InputType()
class BookmarkInput {
  @Field(type => String)
  url: string;

  @Field(type => String)
  title: string;

  @Field(type => Date)
  scheduledAt?: Date;
}

@InputType()
export class AddInGoogleEventsInput {
  @Field(type => [BookmarkInput], { description: 'Bookmarks for adding in Google calendar events' })
  bookmarks: BookmarkInput[];
}

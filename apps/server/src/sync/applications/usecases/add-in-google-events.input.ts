import { Field } from '@nestjs/graphql';
import { Bookmark } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmark.entity';

export class AddInGoogleEventsInput {
  @Field(type => String)
  calendarId: string;

  @Field(type => [Bookmark], { description: 'Bookmarks for adding in Google calendar events' })
  bookmarks: Bookmark[];
}

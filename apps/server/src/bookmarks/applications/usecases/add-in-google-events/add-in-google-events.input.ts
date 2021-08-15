import { Field, InputType } from '@nestjs/graphql';
import { BookmarkInput } from '@readable/bookmarks/domain/models/bookmark.input';

@InputType()
export class AddInGoogleEventsInput {
  @Field(type => [BookmarkInput], { description: 'Bookmarks for adding in Google calendar events' })
  bookmarks: BookmarkInput[];
}

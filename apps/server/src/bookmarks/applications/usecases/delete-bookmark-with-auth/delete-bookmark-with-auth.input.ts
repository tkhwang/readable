import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteBookmarkWithAuthInput {
  @Field(type => String)
  bookmarkId: string;
}

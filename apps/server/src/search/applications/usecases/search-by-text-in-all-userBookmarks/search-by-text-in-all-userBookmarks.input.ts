import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SearchByTextInAllUserBookmarksInput {
  @Field(type => String)
  query: string;
}

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindMyUserBookmarksGroupedByInterestsInput {
  @Field(type => Number)
  limit: number;

  constructor(limit: number) {
    this.limit = limit;
  }
}

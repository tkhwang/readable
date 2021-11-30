import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindMyUserBookmarksGroupedByInterestsInput {
  @Field(type => Number, { defaultValue: 3 })
  limitOfInterests: number;

  @Field(type => Number, { defaultValue: 3 })
  limitOfUserBookmarks: number;

  constructor(limitOfInterests: number, limitOfUserBookmarks: number) {
    this.limitOfInterests = limitOfInterests;
    this.limitOfUserBookmarks = limitOfUserBookmarks;
  }
}

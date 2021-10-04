import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindUsersHavingManyUserBookmarksWithAuthInput {
  @Field(type => Number)
  howMany: number;
}

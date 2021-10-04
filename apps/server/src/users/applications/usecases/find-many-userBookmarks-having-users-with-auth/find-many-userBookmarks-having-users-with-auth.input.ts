import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindManyUserBookmarksHavingUsersWithAuthInput {
  @Field(type => Number)
  howMany: number;
}

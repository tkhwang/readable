import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindUsersHavingManyFollowersWithAuthInput {
  @Field(type => Number)
  howMany: number;
}

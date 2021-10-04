import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindManyFollowersWithAuthInput {
  @Field(type => Number)
  howMany: number;
}

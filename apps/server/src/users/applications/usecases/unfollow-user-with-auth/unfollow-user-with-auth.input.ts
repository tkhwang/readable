import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UnfollowUserWithAuthInput {
  @Field(type => String, { description: 'Unfollowing User id' })
  followingUserId: string;
}

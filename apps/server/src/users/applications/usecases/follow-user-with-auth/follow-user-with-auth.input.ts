import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FollowUserWithAuthInput {
  @Field(type => String, { description: 'Following User id' })
  followingUserId: string;
}

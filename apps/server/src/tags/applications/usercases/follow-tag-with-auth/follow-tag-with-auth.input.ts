import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FollowTagWithAuthInput {
  @Field(type => String)
  tagId: string;
}

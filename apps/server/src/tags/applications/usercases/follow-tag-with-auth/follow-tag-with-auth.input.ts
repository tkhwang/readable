import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FollowTagInput {
  @Field(type => String)
  tagId: string;
}

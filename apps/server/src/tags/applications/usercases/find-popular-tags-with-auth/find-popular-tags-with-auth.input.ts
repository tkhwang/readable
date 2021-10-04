import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindPopularTagsWithAuthInput {
  @Field(type => Number)
  howMany: number;
}

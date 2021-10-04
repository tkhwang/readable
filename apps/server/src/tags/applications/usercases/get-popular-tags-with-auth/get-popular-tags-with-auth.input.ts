import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetPopularTagsWithAuthInput {
  @Field(type => Number)
  howMany: number;
}

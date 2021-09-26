import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MapTagsInput {
  @Field(type => [String])
  tags: string[];
}

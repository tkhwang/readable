import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SearchByTextInAllUrlinfosInput {
  @Field(type => String)
  query: string;
}

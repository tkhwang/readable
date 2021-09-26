import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SuggestTagInput {
  @Field(type => String, { description: 'Query text for tag suggestion' })
  query: string;
}

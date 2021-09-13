import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ExtractUrlInfoInput {
  @Field(type => String)
  url: string;
}

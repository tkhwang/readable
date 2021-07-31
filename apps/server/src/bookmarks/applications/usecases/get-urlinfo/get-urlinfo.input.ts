import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetUrlInfoInput {
  @Field(type => String)
  url: string;
}

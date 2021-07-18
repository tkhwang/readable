import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddBookMarkInput {
  @Field(type => String)
  url: string;
}

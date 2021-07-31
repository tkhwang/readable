import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddBookMarkWithAuthInput {
  @Field(type => String)
  url: string;
}

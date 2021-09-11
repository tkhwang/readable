import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindOrAddInterestWithAuthInput {
  @Field(type => String, { description: 'Interest text' })
  interest: string;

  constructor(interest: string) {
    this.interest = interest;
  }
}

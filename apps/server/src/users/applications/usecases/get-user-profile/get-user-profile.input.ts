import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetUserProfileInput {
  @Field(type => String)
  userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }
}

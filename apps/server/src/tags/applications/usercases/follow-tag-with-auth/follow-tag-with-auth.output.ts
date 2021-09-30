import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FollowTagWithAuthOutput {
  @Field(() => Boolean)
  isSuccess: boolean;

  constructor(isSuccess: boolean) {
    this.isSuccess = isSuccess;
  }
}

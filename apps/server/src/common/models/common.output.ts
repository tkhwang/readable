import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommonOutput {
  @Field(type => Boolean, { description: '공통 Response (output)' })
  isSuccess: boolean;

  constructor(isSuccess = true) {
    this.isSuccess = isSuccess;
  }
}

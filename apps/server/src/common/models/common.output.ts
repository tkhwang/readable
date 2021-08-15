import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommonOutput {
  @Field(type => Boolean, { description: '공통 Response (output)' })
  isSuccess: boolean;

  message?: string;

  constructor(isSuccess = true, message = '') {
    this.isSuccess = isSuccess;
    this.message = message;
  }
}

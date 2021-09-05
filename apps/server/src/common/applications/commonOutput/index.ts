import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommonOutput {
  @Field(type => Boolean, { description: 'Commont output : Success indicator' })
  isSuccess: boolean;

  @Field(type => Error, { description: 'Common output: error if available', nullable: true })
  error?: Error;

  constructor(isSuccess: boolean, error?: Error) {
    this.isSuccess = isSuccess;
    this.error = error;
  }
}

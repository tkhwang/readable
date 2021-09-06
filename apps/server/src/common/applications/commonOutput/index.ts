import { Field, ObjectType } from '@nestjs/graphql';

export interface CommonOutput<TData> {
  isSuccess: boolean;
  error?: Error;
  data?: TData;
}

// @ObjectType()
// export class CommonOutput {
//   @Field(type => Boolean, { description: 'Commont output : Success indicator' })
//   isSuccess: boolean;

//   @Field(type => Error, { description: 'Common output: error if available', nullable: true })
//   error?: Error;

//   constructor(isSuccess: boolean, error?: Error) {
//     this.isSuccess = isSuccess;
//     this.error = error;
//   }
// }

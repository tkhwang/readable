import { Field, ObjectType } from '@nestjs/graphql';
import { CommonOutput } from '@readable/common/applications/commonOutput';
import { Interest } from '@readable/interests/infrastructures/mongo/entities/interest.entity';

@ObjectType()
export class FindOrAddInterestWithAuthOutputData {
  @Field(type => Interest, { description: 'Interest' })
  interest: Interest;

  constructor(interest: Interest) {
    this.interest = interest;
  }
}

@ObjectType()
// export class FindOrAddInterestWithAuthOutput implements CommonOutput<FindOrAddInterestWithAuthOutputData> {
export class FindOrAddInterestWithAuthOutput {
  @Field(type => Boolean, { description: 'Commont output : Success indicator' })
  isSuccess: boolean;

  @Field(type => Error, { description: 'Common output: error if available', nullable: true })
  error?: Error;

  @Field(type => FindOrAddInterestWithAuthOutputData, {
    description: 'FindOrAddInterestWithAuth output data : interest',
  })
  data: FindOrAddInterestWithAuthOutputData;

  constructor(isSuccess: boolean, data: FindOrAddInterestWithAuthOutputData, error?: Error) {
    this.isSuccess = isSuccess;
    this.data = data;
    this.error = error;
  }
}

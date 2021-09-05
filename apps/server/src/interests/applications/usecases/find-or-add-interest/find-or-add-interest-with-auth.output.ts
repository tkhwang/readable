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
export class FindOrAddInterestWithAuthOutput extends CommonOutput {
  @Field(type => FindOrAddInterestWithAuthOutputData, {
    description: 'FindOrAddInterestWithAuth output data : interest',
  })
  data: FindOrAddInterestWithAuthOutputData;

  constructor(isSuccess: boolean, data: FindOrAddInterestWithAuthOutputData, error?: Error) {
    super(isSuccess, error);
    this.data = data;
  }
}

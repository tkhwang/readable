import { ObjectType } from '@nestjs/graphql';
import { CommonOutput } from '@readable/common/applications/commonOutput';

@ObjectType()
export class AddInGoogleEventsOutput extends CommonOutput {
  constructor(isSuccess: boolean, error?: Error) {
    super(isSuccess, error);
  }
}

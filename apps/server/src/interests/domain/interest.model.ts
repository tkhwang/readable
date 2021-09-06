import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';

@ObjectType()
export class Interest extends CoreModel {
  @Field(type => String)
  userId: string;

  @Field(type => String)
  interest: string;
}

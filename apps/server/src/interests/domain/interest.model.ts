import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';

@ObjectType()
export class User extends CoreModel {
  @Field(type => String)
  text: string;
}

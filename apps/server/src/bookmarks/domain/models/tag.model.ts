import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';

@ObjectType()
export class Tag extends CoreModel {
  @Field(type => String)
  tag: string;
}

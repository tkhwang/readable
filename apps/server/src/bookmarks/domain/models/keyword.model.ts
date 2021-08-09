import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';

@ObjectType()
export class Keyword extends CoreModel {
  @Field(type => String)
  keyword: string;
}

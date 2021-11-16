import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';

@ObjectType()
export class Category extends CoreModel {
  @Field(tpye => String)
  category: string;
}

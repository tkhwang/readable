import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';

export enum initCategories {
  'DEVELOPMENT' = 'development',
  'DESIGN' = 'design',
}

@ObjectType()
export class Category extends CoreModel {
  @Field(tpye => String)
  category: string;
}

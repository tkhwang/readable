import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';

export enum initCategories {
  'DESIGN' = 'design',
  'BACKEND' = 'backend',
  'FRONTEND' = 'frontend',
  'LANGUAGE' = 'language',
  'TOOL' = 'tool',
}

@ObjectType()
export class Category extends CoreModel {
  @Field(tpye => String)
  category: string;
}

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddCategoryInput {
  @Field()
  category: string;

  constructor(category: string) {
    this.category = category;
  }
}

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BasicBookInput {
  @Field(type => String)
  url: string;
}

@InputType()
export class AddBookMarkWithAuthInput extends BasicBookInput {
  @Field(type => [String], { description: 'User interest which includes bookmarks.' })
  interest: string;

  @Field(type => [String], { nullable: true, description: 'Tag ids' })
  tagIds?: string[];
}

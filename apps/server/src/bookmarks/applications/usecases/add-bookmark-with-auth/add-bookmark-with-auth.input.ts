import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BasicBookInput {
  @Field(type => String)
  url: string;

  constructor(url: string) {
    this.url = url;
  }
}

@InputType()
export class AddBookMarkWithAuthInput extends BasicBookInput {
  @Field(type => [String], { description: 'User interest which includes bookmarks.' })
  interest: string;

  @Field(type => [String], { nullable: true, description: 'Tag ids' })
  tags?: string[];

  constructor(url: string, interest: string, tags?: string[]) {
    super(url);
    this.interest = interest;
    this.tags = tags;
  }
}

import { Field } from '@nestjs/graphql';

export class AddUserBookmarkWithAuthInput {
  @Field(type => String, { description: 'URL for adding bookmark' })
  url: string;

  @Field(type => String, { description: 'User interest for bookmark' })
  interest: string;

  @Field(type => [String], { nullable: true, description: 'User tags for bookmark' })
  tags?: string[];

  constructor(url: string, interest: string, tags?: string[]) {
    this.url = url;
    this.interest = interest;
    this.tags = tags;
  }
}

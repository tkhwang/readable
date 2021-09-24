import { Field, InputType } from '@nestjs/graphql';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';

@InputType()
export class RecommendUserBookmarksByTagsInput {
  @Field(type => [Tag])
  tags: Tag[];

  @Field(type => String)
  urlHash: string;

  @Field(type => Number)
  howMany: number;

  constructor(tags: Tag[], urlHash: string, howMany: number) {
    this.tags = tags;
    this.urlHash = urlHash;
    this.howMany = howMany;
  }
}

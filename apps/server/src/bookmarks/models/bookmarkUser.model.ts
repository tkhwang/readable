import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';

@ObjectType()
export class BookmarkUser extends CoreModel {
  @Field(type => String)
  urlHash: string;

  @Field(type => String)
  bookmarkId: string;

  @Field(type => String)
  userId: string;
}

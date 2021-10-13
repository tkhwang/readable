import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';
import { Interest } from '@readable/interests/domain/interest.model';
import { Tag } from '@readable/tags/domain/models/tag.model';
import { UrlInfo } from '@readable/url-info/domain/model/url-info.model';
import { User } from '@readable/users/domain/models/user.model';

@ObjectType()
export class UserBookmarkBRFO extends CoreModel {
  @Field(type => String, { description: 'URL hash' })
  urlHash: string;

  @Field(type => UrlInfo)
  urlInfo: UrlInfo;

  @Field(type => String)
  userId: string;

  @Field(type => Interest)
  interest: Interest;

  @Field(type => [Tag], { description: 'Tags' })
  tags: Tag[];

  @Field(type => Boolean)
  isPrivate: boolean;

  @Field(type => Date, { nullable: true })
  scheduledAt?: Date;

  @Field(type => Date, { nullable: true })
  donedAt?: Date;
}

@ObjectType()
export class UserBookmark extends UserBookmarkBRFO {
  @Field(type => [User], { description: 'User who bookmarked this url (field resolver)' })
  bookmarkers: User[];

  @Field(type => Number, { description: 'Number of user who bookmarked this url (field resolver)' })
  bookmarkersCount: number;

  @Field(type => [User], { description: 'User who read this url (field resolver)' })
  readers: User[];

  @Field(type => Number, { description: 'Number of user who read this url (field resolver)' })
  readersCount: number;
}

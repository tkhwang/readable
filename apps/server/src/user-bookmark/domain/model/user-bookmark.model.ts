import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';
import { Interest } from '@readable/interests/domain/interest.model';
import { UrlInfo } from '@readable/url-info/domain/model/url-info.model';

@ObjectType()
export class UserBookmarkBRFO extends CoreModel {
  @Field(type => String, { description: 'URL hash' })
  urlHash: string;

  @Field(type => UrlInfo)
  urlInfo: UrlInfo;

  @Field(type => Interest)
  interest: Interest;

  @Field(type => Date, { nullable: true })
  scheduledAt?: Date;

  @Field(type => Date, { nullable: true })
  donedAt?: Date;
}

@ObjectType()
export class UserBookmark extends UserBookmarkBRFO {}

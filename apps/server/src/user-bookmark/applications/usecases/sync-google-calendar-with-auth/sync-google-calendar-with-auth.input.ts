import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SyncGoogleCalendarWithAuthUrlInfo {
  @Field(type => String)
  url: string;

  @Field(type => String)
  title: string;

  @Field(type => Date, { nullable: true })
  scheduledAt?: Date;
}

@InputType()
export class SyncGoogleCalendarWithAuthInput {
  @Field(type => SyncGoogleCalendarWithAuthUrlInfo, { description: 'Sync userBookmark with Google calendar' })
  urlInfo: SyncGoogleCalendarWithAuthUrlInfo;
}

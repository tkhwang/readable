import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';

@ObjectType()
export class UserFollow extends CoreModel {
  @Field(type => String, { description: 'Following User id' })
  followingUserId: string;

  @Field(type => String, { description: 'Follower User id' })
  followerUserId: string;
}

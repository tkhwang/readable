import { Field, ObjectType } from '@nestjs/graphql';
import { CoreModel } from '@readable/common/models/core.model';

@ObjectType()
export class UserFollow extends CoreModel {
  @Field(type => String, { description: '팔로잉 유저 id' })
  followingUserFirestoreId: string;

  @Field(type => String, { description: '커뮤니티 팔로어 유저 id' })
  followerUserFirestoreId: string;
}

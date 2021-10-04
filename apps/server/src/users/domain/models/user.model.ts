import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { AuthProviders } from '@readable/auth/domain/auth.type';
import { CoreModel } from '@readable/common/models/core.model';
import { Tag } from '@readable/tags/domain/models/tag.model';
import { OAuthUser } from './oauthUser.model';

@InputType({ isAbstract: true })
@ObjectType()
export class UserBRFO extends CoreModel {
  @Field(type => AuthProviders)
  provider: AuthProviders;

  @Field(type => String)
  providerId: string;

  @Field(type => String)
  name: string;

  @Field(type => String, { nullable: true })
  email?: string;

  @Field(type => String, { nullable: true })
  avatarUrl?: string;

  @Field(type => [OAuthUser])
  oauthUsers: OAuthUser[];

  @Field(type => String)
  timezone: string;

  @Field(type => String, { nullable: true })
  latestInterestId?: string;

  @Field(type => [Tag], { description: 'Tags' })
  tags: Tag[];
}

@ObjectType()
export class User extends UserBRFO {
  @Field(type => Number, { description: 'Followers User count (field resolver)' })
  followersCount: number;

  @Field(type => Number, { description: 'Followings User count (field resolver)' })
  followingsCount: number;

  @Field(type => Boolean, { description: 'Whether I follow this user or not (field resolver)' })
  isFollowingUser: boolean;
}

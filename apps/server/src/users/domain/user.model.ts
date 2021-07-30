import { ObjectType, Field, Int, ID, InputType } from '@nestjs/graphql';
import { AuthProviders } from '@readable/auth/domain/auth.type';
import { CoreModel } from '@readable/common/models/core.model';
import { OAuthUser } from './oauthUser.model';

@InputType({ isAbstract: true })
@ObjectType()
export class User extends CoreModel {
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
}

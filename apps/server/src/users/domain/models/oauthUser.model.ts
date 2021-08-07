import { ObjectType, Field, Int, ID, InputType } from '@nestjs/graphql';
import { AuthProviders } from '@readable/auth/domain/auth.type';
import { CoreModel } from '@readable/common/models/core.model';
import { User } from './user.model';

@InputType({ isAbstract: true })
@ObjectType()
export class OAuthUser extends CoreModel {
  @Field(type => AuthProviders)
  provider: AuthProviders;

  @Field(type => String)
  providerId: string;

  @Field(type => String, { nullable: true })
  accessToken?: string;

  @Field(type => String, { nullable: true })
  refreshToken?: string;

  @Field(type => String)
  name: string;

  @Field(type => String, { nullable: true })
  email?: string;

  @Field(type => String, { nullable: true })
  avatarUrl?: string;

  @Field(type => User)
  user: User;
}

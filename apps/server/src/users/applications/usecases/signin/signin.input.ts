import { Field, InputType, PickType } from '@nestjs/graphql';
import { AuthProviders } from '@readable/auth/domain/auth.type';

@InputType()
export class SigninInput {
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

  @Field(type => String, { nullable: true })
  accessToken?: string;

  @Field(type => String, { nullable: true })
  refreshToken?: string;
}

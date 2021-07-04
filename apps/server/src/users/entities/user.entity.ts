import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { AuthProviders } from '@readable/auth/auth.type';
import { BaseModel } from '@readable/mongooseModels/base.model';

@ObjectType()
export class User extends BaseModel {
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
}

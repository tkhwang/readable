import { InputType, Field } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';

@InputType()
export class CreateUserInput {
  @Field(type => String)
  public provider: string;

  @Field(type => String)
  public providerId: string;

  @Field(type => String)
  public name: string;

  @Field(type => String, { nullable: true })
  public email?: string;

  @Field(type => String, { nullable: true })
  public avatarUrl?: string;

  // constructor(provider: string, providerId: string, name: string, email?: string, avatarUrl?: string) {
  //   this.provider = provider;
  //   this.providerId = providerId;
  //   this.name = name;
  //   this.email = email;
  //   this.avatarUrl = avatarUrl;
  // }
}

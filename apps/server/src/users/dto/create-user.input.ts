import { InputType, Field } from '@nestjs/graphql';

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
}

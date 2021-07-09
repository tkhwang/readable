import { ObjectType, Field, Int, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AuthProviders } from '@readable/auth/auth.type';
import { CoreEntity } from '@readable/common/entities/core.entity';

@InputType({ isAbstract: true })
@Schema({ collection: 'users' })
@ObjectType()
export class User extends CoreEntity {
  @Prop({ type: AuthProviders, required: true })
  @Field(type => AuthProviders)
  provider: AuthProviders;

  @Prop({ required: true })
  @Field(type => String)
  providerId: string;

  @Prop({ required: true })
  @Field(type => String)
  name: string;

  @Prop()
  @Field(type => String, { nullable: true })
  email?: string;

  @Prop()
  @Field(type => String, { nullable: true })
  avatarUrl?: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);

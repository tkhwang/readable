import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AuthProviders } from '@readable/auth/auth.type';
import { BaseMongoModel } from '@readable/mongooseModels/base.mongoModel';

@Schema({ collection: 'users' })
export class UserMongoModel extends BaseMongoModel {
  @Prop({ type: AuthProviders, required: true })
  provider: AuthProviders;

  @Prop({ required: true })
  providerId: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  email?: string;

  @Prop()
  avatarUrl?: string;
}

export type UserDocument = UserMongoModel & Document;
export const UserSchema = SchemaFactory.createForClass(UserMongoModel);

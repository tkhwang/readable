import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { AuthProviders } from '@readable/auth/auth.type';
import { MongoBaseModel } from '@readable/mongooseModels/mongoBase.model';
import { prop } from '@typegoose/typegoose';
// import { MongoBaseModel } from '@readable/models/mongoBase.model';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class User extends MongoBaseModel {
  @prop({ required: true })
  @Field(type => AuthProviders)
  provider: AuthProviders;

  @prop({ required: true })
  @Field(type => String)
  providerId: string;

  @prop({ required: true })
  @Field(type => String)
  name: string;

  @prop()
  @Field(type => String, { nullable: true })
  email?: string;

  @prop()
  @Field(type => String, { nullable: true })
  avatarUrl?: string;
}

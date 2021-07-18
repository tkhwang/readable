import { Field, ObjectType } from '@nestjs/graphql';
import { ObjectIdScalar } from '@readable/types/ObjectIdScalar';
import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

@ObjectType()
export abstract class CoreModel {
  @Field(type => String)
  public id: string;

  @Field(type => Date)
  public createdAt: Date;

  @Field(type => Date)
  public updatedAt: Date;

  @Field(type => Date)
  public deletedAt: Date;
}

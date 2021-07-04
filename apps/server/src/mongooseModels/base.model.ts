import { Field, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { ObjectIdScalar } from '@readable/types/ObjectIdScalar';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export abstract class BaseModel {
  @Field(type => ObjectIdScalar)
  public _id: ObjectId;

  @Field(type => Date)
  public createdAt: Date;

  @Field(type => Date)
  public updatedAt: Date;

  @Field(type => Date)
  public deletedAt: Date;
}

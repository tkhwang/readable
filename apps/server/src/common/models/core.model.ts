import { Field, ObjectType } from '@nestjs/graphql';
import { ObjectIdScalar } from '@readable/types/ObjectIdScalar';
import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

@Schema()
@ObjectType()
export abstract class CoreModel {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: () => new ObjectId(),
  })
  @Field(type => ObjectIdScalar)
  public _id: ObjectId;

  @Prop({ required: true, default: () => new Date() })
  @Field(type => Date)
  public createdAt: Date;

  @Prop({ required: true, default: () => new Date() })
  @Field(type => Date)
  public updatedAt: Date;

  @Prop({ required: true, default: () => new Date(-1) })
  @Field(type => Date)
  public deletedAt: Date;
}

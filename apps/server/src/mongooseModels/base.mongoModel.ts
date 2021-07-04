import { Field, ObjectType } from '@nestjs/graphql';
// import { ObjectId } from 'mongoose';
import { ObjectIdScalar } from '@readable/types/ObjectIdScalar';
import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

@Schema()
export abstract class BaseMongoModel {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: () => new ObjectId(),
  })
  public _id: ObjectId;

  @Prop({ required: true, default: () => new Date() })
  public createdAt: Date;

  @Prop({ required: true, default: () => new Date() })
  public updatedAt: Date;

  @Prop({ required: true, default: () => new Date(-1) })
  public deletedAt: Date;
}

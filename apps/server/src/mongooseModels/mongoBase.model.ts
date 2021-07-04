import { Field, ObjectType } from '@nestjs/graphql';
import { modelOptions, prop, Severity } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { ObjectIdScalar } from '@readable/types/ObjectIdScalar';

@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: {
    timestamps: true,
    toJSON: {
      virtuals: true,
      getters: true,
    },
  },
})
@ObjectType()
export abstract class MongoBaseModel {
  @prop({ required: true })
  @Field(type => ObjectIdScalar)
  public _id: ObjectId;

  @prop({ required: true, default: () => new Date() })
  @Field(type => Date)
  public createdAt: Date;

  @prop({ required: true, default: () => new Date() })
  @Field(type => Date)
  public updatedAt: Date;

  @prop({ required: true, default: () => new Date(-1) })
  @Field(type => Date)
  public deletedAt: Date;
}

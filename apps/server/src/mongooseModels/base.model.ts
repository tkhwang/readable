import { modelOptions, prop, Severity } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';

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
export abstract class BaseModel {
  @prop({ required: true })
  public _id: ObjectId;

  @prop({ required: true, default: () => new Date() })
  public createdAt: Date;

  @prop({ required: true, default: () => new Date() })
  public updatedAt: Date;

  @prop({ required: true, default: () => new Date(-1) })
  public deletedAt: Date;
}

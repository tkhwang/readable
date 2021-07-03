import { prop } from '@typegoose/typegoose';
import { BaseModel } from '../base.model';

export class UserModel extends BaseModel {
  @prop({ required: true })
  public provider: string;

  @prop({ required: true })
  public providerId: string;

  @prop({ required: true })
  public name: string;

  @prop()
  public email?: string;

  @prop()
  public avatarUrl?: string;
}

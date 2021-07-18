import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AuthProviders } from '@readable/auth/auth.type';
import { CoreEntity } from '@readable/common/infrastructures/mongo/entities';

@Schema({ collection: 'users' })
export class User extends CoreEntity {
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

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);

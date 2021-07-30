import { AuthProviders } from '@readable/auth/domain/auth.type';
import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('oauthUsers')
export class OAuthUser extends CoreEntity {
  @Column({
    type: 'enum',
    enum: AuthProviders,
    default: AuthProviders.Google,
  })
  provider: AuthProviders;

  @Column()
  providerId: string;

  @Column()
  name: string;

  @Column()
  email?: string;

  @Column()
  avatarUrl?: string;

  @ManyToOne(() => User, user => user.oauthUsers)
  user: User;
}

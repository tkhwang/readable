import { AuthProviders } from '@readable/auth/domain/auth.type';
import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity, OneToMany } from 'typeorm';
import { OAuthUser } from './oauthUser.entity';

@Entity('users')
export class User extends CoreEntity {
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

  @OneToMany(() => OAuthUser, oauthUser => oauthUser.user)
  oauthUsers: OAuthUser[];

  @Column({ default: 'Asia/Seoul' })
  timezone: string;
}

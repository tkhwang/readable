import { AuthProviders } from '@readable/auth/domain/auth.type';
import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
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

  @Column({ nullable: true })
  nickName?: string;

  @Column()
  email?: string;

  @Column()
  avatarUrl?: string;

  @OneToMany(() => OAuthUser, oauthUser => oauthUser.user)
  oauthUsers: OAuthUser[];

  @Column({ default: 'Asia/Seoul' })
  timezone: string;

  @Column({ nullable: true })
  latestInterestId?: string;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}

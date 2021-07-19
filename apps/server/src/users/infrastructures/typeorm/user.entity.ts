import { AuthProviders } from '@readable/auth/auth.type';
import { Bookmark } from '@readable/bookmarks/infrastructures/typeorm/bookmark.entity';
import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity, OneToMany } from 'typeorm';

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

  @OneToMany(() => Bookmark, bookmark => bookmark.user)
  bookmarks: Bookmark[];
}

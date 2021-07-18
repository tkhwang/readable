import { AuthProviders } from '@readable/auth/auth.type';
import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends CoreEntity {
  @Column('enum', { enum: AuthProviders })
  provider: AuthProviders;

  @Column()
  providerId: string;

  @Column()
  name: string;

  @Column()
  email?: string;

  @Column()
  avatarUrl?: string;
}

import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity } from 'typeorm';

@Entity('userFollows')
export class UserFollow extends CoreEntity {
  @Column()
  followingUserFirestoreId: string;

  @Column()
  followerUserFirestoreId: string;
}

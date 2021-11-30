import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { UserBookmark } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.entity';
import { Column, Entity, OneToMany, Unique } from 'typeorm';

@Entity('interests')
@Unique('userid-interest', ['userId', 'interest'])
export class Interest extends CoreEntity {
  @Column()
  interest: string;

  @Column()
  userId: string;

  @OneToMany(() => UserBookmark, userBookmark => userBookmark.interest)
  userBookmarks: UserBookmark[];
}

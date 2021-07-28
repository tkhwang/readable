import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity } from 'typeorm';

@Entity('bookmarkUsers')
export class BookmarkUser extends CoreEntity {
  @Column()
  urlHash: string;

  @Column()
  bookmarkId: string;

  @Column()
  userId: string;
}

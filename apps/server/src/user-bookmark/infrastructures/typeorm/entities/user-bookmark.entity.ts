import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Interest } from '@readable/interests/infrastructures/typeorm/entities/interest.entity';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';
import { User } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne } from 'typeorm';

@Entity('userBookmarks')
export class UserBookmark extends CoreEntity {
  @Column()
  urlHash: string;

  @ManyToOne(() => UrlInfo, urlInfo => urlInfo.userBookmarks)
  urlInfo: UrlInfo;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  // @ManyToOne(() => Interest, interest => interest.userBookmarks)
  @OneToOne(() => Interest)
  @JoinColumn()
  interest: Interest;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];

  @Column({ type: 'datetime', nullable: true })
  scheduledAt?: Date;

  @Column({ type: 'datetime', nullable: true })
  donedAt?: Date;
}

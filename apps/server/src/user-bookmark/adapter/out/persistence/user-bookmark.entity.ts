import { CoreEntityWithoutCreatedAt } from '@readable/common/infrastructures/typeorm/entities';
import { Interest } from '@readable/interests/infrastructures/typeorm/entities/interest.entity';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';
import { Column, CreateDateColumn, Entity, Index, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity('userBookmarks')
export class UserBookmark extends CoreEntityWithoutCreatedAt {
  @Column()
  urlHash: string;

  @ManyToOne(() => UrlInfo, urlInfo => urlInfo.userBookmarks)
  urlInfo: UrlInfo;

  @Column()
  userId: string;

  @ManyToOne(() => Interest, interest => interest.userBookmarks)
  interest: Interest;

  @ManyToMany(() => Tag, tag => tag.userBookmarks)
  @JoinTable()
  tags: Tag[];

  @Column({ default: false })
  isPrivate: boolean;

  @Column({ type: 'datetime', nullable: true })
  scheduledAt?: Date;

  @Column({ type: 'datetime', nullable: true })
  donedAt?: Date;

  // TODO(Teddy): Find uuid in sequence, not random for better indexing.
  @Index()
  @CreateDateColumn()
  public createdAt: Date;
}

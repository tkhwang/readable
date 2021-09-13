import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Interest } from '@readable/interests/infrastructures/typeorm/entities/interest.entity';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity('userBookmarks')
export class UserBookmark extends CoreEntity {
  @Column()
  urlHash: string;

  @ManyToOne(() => UrlInfo, urlInfo => urlInfo.userBookmarks)
  urlInfo: UrlInfo;

  @OneToOne(() => Interest)
  @JoinColumn()
  interest: Interest;

  @Column({ type: 'datetime', nullable: true })
  scheduledAt?: Date;

  @Column({ type: 'datetime', nullable: true })
  donedAt?: Date;
}

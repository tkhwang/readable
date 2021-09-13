import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('userBookmarks')
export class UserBookmark extends CoreEntity {
  @Column()
  urlHash: string;

  @ManyToOne(() => UrlInfo, urlInfo => urlInfo.userBookmarks)
  urlInfo: UrlInfo;

  @Column({ type: 'datetime', nullable: true })
  scheduledAt?: Date;

  @Column({ type: 'datetime', nullable: true })
  donedAt?: Date;
}

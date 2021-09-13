import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity } from 'typeorm';

@Entity('urlInfos')
export class UrlInfo extends CoreEntity {
  @Column()
  url: string;

  @Column()
  urlHash: string;

  @Column({ nullable: true })
  siteName?: string;

  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  imageUrl?: string;

  @Column('varchar', { nullable: true, name: 'summary', length: 4096 })
  summary?: string;
}

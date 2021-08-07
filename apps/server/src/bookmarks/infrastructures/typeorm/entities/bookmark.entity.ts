import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity } from 'typeorm';

@Entity('bookmarks')
export class Bookmark extends CoreEntity {
  @Column()
  url: string;

  @Column()
  siteName: string;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column()
  urlHash: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  generatedImage: string;

  @Column('simple-array')
  tags: string[];

  @Column('int', { default: 0 })
  countFactful: number;

  @Column('int', { default: 0 })
  countEmotional: number;

  @Column('int', { default: 0 })
  countInspirational: number;

  @Column({ type: 'datetime', nullable: true })
  scheduledAt?: Date;

  @Column({ type: 'datetime', nullable: true })
  donedAt?: Date;
}

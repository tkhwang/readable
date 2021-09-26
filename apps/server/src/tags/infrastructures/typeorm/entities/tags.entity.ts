import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity } from 'typeorm';

@Entity('tags')
export class Tag extends CoreEntity {
  @Column()
  tag: string;

  @Column()
  normalizedTag: string;

  @Column({ nullable: true })
  imageUrl?: string;

  @Column({ nullable: true })
  description?: string;
}

export type TagData = Pick<Tag, 'tag' | 'imageUrl' | 'description'>;

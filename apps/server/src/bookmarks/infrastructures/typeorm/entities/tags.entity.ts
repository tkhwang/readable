import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity } from 'typeorm';

@Entity('tags')
export class Tag extends CoreEntity {
  @Column()
  tag: string;
}

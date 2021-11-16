import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity } from 'typeorm';

@Entity('categories')
export class Category extends CoreEntity {
  @Column()
  category: string;
}

import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('categories')
export class Category extends CoreEntity {
  @Column()
  category: string;

  @OneToMany(() => Tag, tag => tag.category)
  tags: Tag[];
}

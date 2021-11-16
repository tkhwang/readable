import { Category } from '@readable/categories/infrastructures/typeorm/entities/category.entity';
import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { UserBookmark } from '@readable/user-bookmark/infrastructures/typeorm/entities/user-bookmark.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity('tags')
export class Tag extends CoreEntity {
  @Column()
  tag: string;

  @Column()
  normalizedTag: string;

  @Column({ nullable: true })
  categoryId?: string;

  @Column({ nullable: true })
  imageUrl?: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToMany(() => UserBookmark, userBookmark => userBookmark.tags)
  userBookmarks: UserBookmark[];
}

export type TagData = Pick<Tag, 'tag' | 'imageUrl' | 'description'>;

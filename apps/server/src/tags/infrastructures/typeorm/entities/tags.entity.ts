import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { TagsUtilityService } from '@readable/tags/tags-utility.service';
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

  // constructor(tag: string, imageUrl?: string, description?: string) {
  //   super();
  //   this.tag = tag;
  //   this.normalizedTag = TagsUtilityService.normalizeTag(tag);
  //   this.imageUrl = imageUrl;
  //   this.description = description;
  // }
}

export type TagData = Pick<Tag, 'id' | 'tag' | 'imageUrl' | 'description'>;

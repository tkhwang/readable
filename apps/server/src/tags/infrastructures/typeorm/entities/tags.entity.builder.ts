import { Category } from '@readable/categories/infrastructures/typeorm/entities/category.entity';
import { TagsUtilityService } from '@readable/tags/tags-utility.service';
import { Tag } from './tags.entity';

export class TagBuilder {
  tag: Tag;

  constructor() {
    this.tag = new Tag();
    return this;
  }

  setTag(tag: string) {
    this.tag.tag = tag;
    this.tag.normalizedTag = TagsUtilityService.normalizeTag(tag);
    return this;
  }

  setImageUrl(imageUrl: string) {
    this.tag.imageUrl = imageUrl;
    return this;
  }

  setDescription(description: string) {
    this.tag.description = description;
    return this;
  }

  setCategoryId(categoryId: string) {
    this.tag.categoryId = categoryId;
    return this;
  }

  build() {
    return this.tag;
  }
}

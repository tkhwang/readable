import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { initCategories } from '@readable/categories/domain/category.model';
import { CategoriesRepository } from '@readable/categories/infrastructures/typeorm/repositories/category.repository';
import { SearchDomain } from '@readable/search/domain/models/search.model';
import { SearchService } from '@readable/search/search.service';
import { TagBuilder } from '@readable/tags/infrastructures/typeorm/entities/tags.entity.builder';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { INIT_TAGS_FOR_DESIGNER, INIT_TAGS_FOR_DEVELOPMENT } from './initialize-tags.data';

@Injectable()
export class InitializeTagsUseCase {
  constructor(
    private readonly searchService: SearchService,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository,
    @InjectRepository(CategoriesRepository) private readonly categoriesRepository: CategoriesRepository
  ) {}

  async execute() {
    const [categoryDevelopment, categoryDesign] = await Promise.all([
      this.categoriesRepository.findOne({ category: initCategories.DEVELOPMENT }),
      this.categoriesRepository.findOne({ category: initCategories.DESIGN }),
    ]);

    for (const tag of INIT_TAGS_FOR_DEVELOPMENT) {
      const newTag = new TagBuilder()
        .setTag(tag.tag)
        .setImageUrl(tag.imageUrl || '')
        .setDescription(tag.description || '')
        .setCategoryId(categoryDevelopment?.id ?? '')
        .build();

      const existingTag = await this.tagsRepository.findOne({ normalizedTag: newTag.normalizedTag });
      if (!existingTag) {
        const newTagEntity = await this.tagsRepository.save(newTag);

        const tagElasticDoc = {
          id: newTagEntity.id,
          tag: newTagEntity.tag,
          normalizedTag: newTagEntity.normalizedTag,
        };
        await this.searchService.indexDocument(SearchDomain.tag.index, tagElasticDoc);
      }
    }
  }
}

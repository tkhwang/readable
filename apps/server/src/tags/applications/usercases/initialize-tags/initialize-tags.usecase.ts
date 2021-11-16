import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { initCategories } from '@readable/categories/domain/category.model';
import { CategoriesRepository } from '@readable/categories/infrastructures/typeorm/repositories/category.repository';
import { SearchDomain } from '@readable/search/domain/models/search.model';
import { SearchService } from '@readable/search/search.service';
import { Tag, TagData } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { TagBuilder } from '@readable/tags/infrastructures/typeorm/entities/tags.entity.builder';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import {
  INIT_TAGS_FOR_BACKEND,
  INIT_TAGS_FOR_DESIGNER,
  INIT_TAGS_FOR_FRONTEND,
  INIT_TAGS_FOR_LANGUAGE,
  INIT_TAGS_FOR_TOOL,
} from './initialize-tags.data';

@Injectable()
export class InitializeTagsUseCase {
  constructor(
    private readonly searchService: SearchService,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository,
    @InjectRepository(CategoriesRepository) private readonly categoriesRepository: CategoriesRepository
  ) {}

  async execute() {
    // init categories
    const newCategories = [
      initCategories.DESIGN,
      initCategories.FRONTEND,
      initCategories.BACKEND,
      initCategories.LANGUAGE,
      initCategories.TOOL,
    ];

    for (const category of newCategories) {
      await this.categoriesRepository.save({ category });
    }

    // init tags
    await this.initTagsFor(initCategories.DESIGN, INIT_TAGS_FOR_DESIGNER);
    await this.initTagsFor(initCategories.FRONTEND, INIT_TAGS_FOR_FRONTEND);
    await this.initTagsFor(initCategories.BACKEND, INIT_TAGS_FOR_BACKEND);
    await this.initTagsFor(initCategories.LANGUAGE, INIT_TAGS_FOR_LANGUAGE);
    await this.initTagsFor(initCategories.TOOL, INIT_TAGS_FOR_TOOL);
  }

  private async initTagsFor(categoryText: string, tagsForCategory: TagData[]) {
    const category = await this.categoriesRepository.findOne({ category: categoryText });

    for (const tag of tagsForCategory) {
      const newTag = new TagBuilder()
        .setTag(tag.tag)
        .setImageUrl(tag.imageUrl || '')
        .setDescription(tag.description || '')
        .setCategoryId(category?.id ?? '')
        .build();

      await this.addTagIfNotExistAndIndexDocument(newTag);
    }
  }

  private async addTagIfNotExistAndIndexDocument(tag: Tag) {
    const existingTag = await this.tagsRepository.findOne({ normalizedTag: tag.normalizedTag });
    if (!existingTag) {
      const newTagEntity = await this.tagsRepository.save(tag);

      const tagElasticDoc = {
        id: newTagEntity.id,
        tag: newTagEntity.tag,
        normalizedTag: newTagEntity.normalizedTag,
      };
      await this.searchService.indexDocument(SearchDomain.tag.index, tagElasticDoc);
    }
  }
}

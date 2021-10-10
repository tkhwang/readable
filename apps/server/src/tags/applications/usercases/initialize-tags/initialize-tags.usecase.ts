import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchDomain } from '@readable/search/domain/models/search.model';
import { SearchService } from '@readable/search/search.service';
import { TagBuilder } from '@readable/tags/infrastructures/typeorm/entities/tags.entity.builder';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { OPERATION_INIT_TAGS } from './initialize-tags.data';

@Injectable()
export class InitializeTagsUseCase {
  constructor(
    private readonly searchService: SearchService,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository
  ) {}

  async execute() {
    for (const tag of OPERATION_INIT_TAGS) {
      const newTag = new TagBuilder()
        .setTag(tag.tag)
        .setImageUrl(tag.imageUrl || '')
        .setDescription(tag.description || '')
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

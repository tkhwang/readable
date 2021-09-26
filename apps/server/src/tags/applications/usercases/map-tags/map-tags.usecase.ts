import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { SearchDomain } from '@readable/search/domain/models/search.model';
import { SearchService } from '@readable/search/search.service';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { TagsUtilityService } from '@readable/tags/tags-utility.service';
import { MapTagsInput } from './map-tags.input';

@Injectable()
export class MapTagsUsecase implements Usecase<MapTagsInput, Tag[]> {
  constructor(
    private readonly searchService: SearchService,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository
  ) {}

  async execute(command: MapTagsInput) {
    const { tags } = command;

    const tagsWithNormalizedText = tags.map(tag => {
      return {
        tag,
        normalizedTag: TagsUtilityService.normalizeTag(tag),
      };
    });

    return Promise.all(
      tagsWithNormalizedText.map(async tagWithNormalizedText => {
        const tagEntities = await this.tagsRepository.find({
          where: { normalizedTag: tagWithNormalizedText.normalizedTag },
        });

        let tagEntity = (tagEntities ?? []).find(tagEntity => tagEntity.tag === tagWithNormalizedText.tag);
        if (!tagEntity) {
          tagEntity = await this.tagsRepository.save(this.tagsRepository.create(tagWithNormalizedText));

          const tagElasticDoc = {
            id: tagEntity.id,
            tag: tagEntity.tag,
            normalizedTag: tagEntity.normalizedTag,
          };
          await this.searchService.indexDocument(SearchDomain.tag.index, tagElasticDoc);
        }
        return tagEntity;
      })
    );
  }
}

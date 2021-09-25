import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagsRepository } from './infrastructures/typeorm/repositories/tags.repository';
import { TagsUtilityService } from './tags-utility.service';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository) {}

  async mapTags(tags: string[]) {
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
        }
        return tagEntity;
      })
    );
  }
}

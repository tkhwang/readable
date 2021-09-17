import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagsRepository } from './infrastructures/typeorm/repositories/tags.repository';
import { normalizeText } from 'normalize-text';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository) {}

  normalize(tag: string) {
    return normalizeText(this.preprocessTag(tag));
  }

  async mapTags(tags: string[]) {
    const tagsWithNormalizedText = tags.map(tag => {
      return {
        tag,
        normalizedTag: this.normalize(tag),
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

  private preprocessTag(tag: string) {
    // MEMO(Teddy): react.js -> react, node.js -> node
    if (tag.endsWith('.js')) {
      return tag.slice(0, -3);
    }
    return tag;
  }
}

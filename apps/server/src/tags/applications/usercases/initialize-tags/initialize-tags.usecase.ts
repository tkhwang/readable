import { InjectRepository } from '@nestjs/typeorm';
import { TagBuilder } from '@readable/tags/infrastructures/typeorm/entities/tags.entity.builder';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { initialiTags } from './initialize-tags.data';

export class InitializeTagsUseCase {
  constructor(@InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository) {}

  async execute() {
    for (const tag of initialiTags) {
      const newTag = new TagBuilder()
        .setTag(tag.tag)
        .setImageUrl(tag.imageUrl || '')
        .setDescription(tag.description || '')
        .build();

      const existingTag = await this.tagsRepository.findOne({ normalizedTag: newTag.normalizedTag });
      if (!existingTag) {
        await this.tagsRepository.save(newTag);
      }
    }
  }
}

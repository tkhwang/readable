import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagsRepository } from './infrastructures/typeorm/repositories/tags.repository';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository) {}

  async mapTags(tags: string[]) {
    return Promise.all(
      tags.map(async tag => {
        let tagEntity = await this.tagsRepository.findOne({ where: { tag } });
        if (!tagEntity) {
          tagEntity = await this.tagsRepository.save(this.tagsRepository.create({ tag }));
        }
        return tagEntity;
      })
    );
  }
}

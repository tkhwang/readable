import { InjectRepository } from '@nestjs/typeorm';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';

export class InitializeTagsUseCase {
  constructor(@InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository) {}
}

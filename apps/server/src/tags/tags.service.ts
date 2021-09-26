import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagsRepository } from './infrastructures/typeorm/repositories/tags.repository';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository) {}
}

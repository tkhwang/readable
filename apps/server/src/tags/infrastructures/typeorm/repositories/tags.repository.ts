import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Tag } from '../entities/tags.entity';

@Injectable()
@EntityRepository(Tag)
export class TagsRepository extends Repository<Tag> {}

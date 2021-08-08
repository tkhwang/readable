import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Keyword } from '../entities/keywords.entity';

@Injectable()
@EntityRepository(Keyword)
export class KeywordsRepository extends Repository<Keyword> {}

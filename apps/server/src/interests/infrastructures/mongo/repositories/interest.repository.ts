import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Interest } from '../entities/interest.entity';

@Injectable()
@EntityRepository(Interest)
export class InterestsRepository extends Repository<Interest> {}

import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { UserFollow } from '../entities/userFollow.entity';

@Injectable()
@EntityRepository(UserFollow)
export class UserFollowsRepository extends Repository<UserFollow> {}

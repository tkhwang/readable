import { Injectable } from '@nestjs/common';
// import { User } from '@readable/users/domain/user.model';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
@EntityRepository(User)
export class UsersRepository extends Repository<User> {}

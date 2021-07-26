import { Injectable } from '@nestjs/common';
import { User } from '@readable/users/domain/user.model';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(User)
export class UsersRepository extends Repository<User> {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './domain/models/user.model';
import { UsersRepository } from './infrastructures/typeorm/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository) {}

  findUserWithRelation(user: User) {
    return this.usersRepository.findOne({ where: { id: user.id }, relations: ['tags'] });
  }

  async findOne(id: string) {
    return this.usersRepository.findOne(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './infrastructures/typeorm/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository) {}

  async findOne(id: string) {
    return this.usersRepository.findOne(id);
  }
}

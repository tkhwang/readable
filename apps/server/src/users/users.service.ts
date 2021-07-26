import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from './infrastructures/typeorm/entities/user.entity';
import { UsersRepository } from './infrastructures/typeorm/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private readonly usersRepository: UsersRepository) {}

  async findOne(id: string) {
    return this.usersRepository.findOne(id);
  }
}

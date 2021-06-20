import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    const user = new User();
    user.id = 1;
    user.name = 'readable';

    return [user];
  }

  findOne(id: number) {
    const user = new User();
    user.id = 1;
    user.name = 'readable';

    return user;
  }
}

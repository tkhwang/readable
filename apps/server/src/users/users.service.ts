import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: ReturnModelType<typeof User>
  ) {}

  async create(createUserInput: CreateUserInput) {
    const createdUser = new this.userModel(createUserInput);
    return await createdUser.save();
  }

  findAll() {
    const user = new User();
    // user.id = 1;
    user.name = 'readable';

    return [user];
  }

  findOne(id: number) {
    const user = new User();
    // user.id = 1;
    user.name = 'readable';

    return user;
  }
}

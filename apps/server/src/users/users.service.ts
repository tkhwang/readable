import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity';
// import { UserDocument, UserMongoModel } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

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

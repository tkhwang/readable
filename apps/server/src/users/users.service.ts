import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity';
// import { UserDocument, UserMongoModel } from './schema/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@readable/jwt/jwt.service';
import { UsersRepository } from './users.repository';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
    private readonly usersRepository: UsersRepository
  ) {}

  async create(createUserInput: CreateUserInput) {
    return this.usersRepository.insert(createUserInput);
  }

  async findAll() {
    return this.usersRepository.findAll();
    // const user = new User();
    // user.name = 'readable';

    // return [user];
  }

  async findOne(id: ObjectId) {
    return this.usersRepository.findById(id);
    // const user = new User();
    // // user.id = 1;
    // user.name = 'readable';

    // return user;
  }
}

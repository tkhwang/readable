import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoRepository } from '@readable/common/repositories';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository extends MongoRepository<User> {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {
    super(userModel);
  }
}

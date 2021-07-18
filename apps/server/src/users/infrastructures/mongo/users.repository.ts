import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoRepository } from '@readable/common/infrastructures/mongo/repositories';
import { Model } from 'mongoose';
import { User } from './user.entity';

@Injectable()
export class UsersRepository extends MongoRepository<User> {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {
    super(userModel);
  }
}

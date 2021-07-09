import { Injectable } from '@nestjs/common';
import { SocialSigninInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { JwtService } from '@readable/jwt/jwt.service';
import { UsersRepository } from './users.repository';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(private readonly jwtService: JwtService, private readonly usersRepository: UsersRepository) {}

  async signinOrCreateUser(signinUser: User) {
    const { provider, providerId } = signinUser;

    let user = await this.usersRepository.findOneByField({ provider, providerId });
    if (!user) {
      user = await this.usersRepository.insert(signinUser);
    }

    const { _id: id } = user;
    return this.jwtService.sign({ id, issuer: process.env.SERVER_HOST });
  }

  async create(socialSigninInput: SocialSigninInput) {
    return this.usersRepository.insert(socialSigninInput);
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

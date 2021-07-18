import { Injectable } from '@nestjs/common';
import { SocialSigninInput } from './dto/create-user.input';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './infrastructures/typeorm/user.entity';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: JwtService,
    // Mongo repository
    // private readonly usersRepository: UsersRepository,
    @InjectRepository(UserEntity) private readonly usersRepository: Repository<UserEntity>
  ) {}

  async signinOrCreateUser(signinUser: User) {
    const { provider, providerId } = signinUser;

    let user = await this.usersRepository.findOne({ provider, providerId });

    if (!user) {
      user = await this.usersRepository.create(signinUser);
      await this.usersRepository.save(user);
    }

    const { id } = user;
    return this.jwtService.sign({ id, issuer: process.env.SERVER_HOST });
  }

  async create(socialSigninInput: SocialSigninInput) {
    return this.usersRepository.insert(socialSigninInput);
  }

  async findAll() {
    // mongo
    // return this.usersRepository.findAll();
    return this.usersRepository.find();
    // const user = new User();
    // user.name = 'readable';

    // return [user];
  }

  async findOne(id: string) {
    // mongo
    // return this.usersRepository.findById(id);
    // return this.usersRepository.findOne(id);

    return this.usersRepository.findOne(id);
  }
}

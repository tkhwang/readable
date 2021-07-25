import { Injectable } from '@nestjs/common';
import { SocialSigninInput } from './dto/create-user.input';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User as UserModel } from './domain/user.model';
import { User as UserEntity } from './infrastructures/typeorm/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(UserEntity) private readonly usersRepository: Repository<UserEntity>
  ) {}

  async signinOrCreateUser(signinUser: UserModel) {
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
    return this.usersRepository.find();
  }

  async findOne(id: string) {
    return this.usersRepository.findOne(id);
  }
}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/usecase';
import { OAuthUser } from '@readable/users/infrastructures/typeorm/entities/oauthUser.entity';
import { User as UserEntity } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { OAuthUsersRepository } from '@readable/users/infrastructures/typeorm/repositories/oauthUsers.repository';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { SigninInput } from './signin.input';

@Injectable()
export class SigninUsecase implements Usecase<SigninInput, string> {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(UserEntity) private readonly usersRepository: UsersRepository,
    @InjectRepository(OAuthUser) private readonly oAuthUsersRepository: OAuthUsersRepository
  ) {}

  async execute(command: SigninInput) {
    const { provider, providerId, email } = command;

    let oauthUser = await this.oAuthUsersRepository.findOne({ provider, providerId });

    if (!oauthUser) {
      oauthUser = await this.oAuthUsersRepository.create(command);
      await this.oAuthUsersRepository.save(oauthUser);
    }

    let user = await this.usersRepository.findOne({ email });

    if (!user) {
      const { id, ...restOAuthUser } = oauthUser;
      user = await this.usersRepository.create(restOAuthUser);

      await this.usersRepository.save(user);
    }

    const { id } = user;
    return this.jwtService.sign({ id, issuer: process.env.SERVER_HOST });
  }
}
